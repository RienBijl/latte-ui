import BEBlocks from "../BEBlocks";
import BESettingsGroup from "../BESettingsGroup";
import BEBlockActions from "../BEBlockActions";

import { BlockBase } from "../block";
import { replaceIndex } from "../utils";
import { optional, rangeField, toggleButton } from "./primitive/settings";
import { optionAdditionalClasses } from "./primitive/element";

const presets = [
	{
		columns: 2,
		classes: [
			"col-12 col-lg-4",
			"col-12 col-lg-8"
		],
		preview: [33, 67]
	},
	{
		columns: 2,
		classes: [
			"col-12 col-lg-8",
			"col-12 col-lg-4"
		],
		preview: [67, 33]
	},
	{
		columns: 3,
		classes: [
			"col-12 col-lg-3",
			"col-12 col-lg-6",
			"col-12 col-lg-3"
		],
		preview: [25, 50, 25]
	}
];

export class ColumnsBlock extends BlockBase
{

	get canHaveChildren()
	{
		return true;
	}

	get defaultOptions()
	{
		return {
			class: "",
			columns: 2,
			gutters: true,
			preset: -1
		};
	}

	get description()
	{
		return "Displays blocks in a column view.";
	}

	get keywords()
	{
		return ["column", "columns", "grid"];
	}

	get name()
	{
		return "Columns";
	}

	constructor()
	{
		super("columns", "layout", "view-column");
	}

	render(h, {children, options, processGroup})
	{
		if (children.flat().length === 0)
			return undefined;

		const preset = presets[options.preset] || undefined;

		return h(
			"div",
			{class: `row be-block-columns ${options.class} ${options.gutters ? "" : "no-gutters"}`},
			Array(preset ? preset.columns : options.columns)
				.fill(undefined)
				.map((_, index) => h("div", {class: preset ? preset.classes[index] : "col-12 col-lg"}, processGroup(children[index] || [])))
		);
	}

	renderEditor(h, api)
	{
		const preset = presets[api.options.preset] || undefined;

		return h(
			"div",
			{class: `row be-block-columns ${api.options.class} ${api.options.gutters ? "" : "no-gutters"}`},
			Array(preset ? preset.columns : api.options.columns)
				.fill(undefined)
				.map((_, index) => h("div", {class: preset ? preset.classes[index] : "col-12 col-lg"}, [
					h(BEBlocks, {
						props: {
							depth: api.depth,
							value: api.children[index] || []
						},
						on: {
							input: c => api.setChildren(replaceIndex(api.children, index, c))
						}
					})
				]))
		);
	}

	renderOptions(h, api)
	{
		return h(BESettingsGroup, {props: {title: this.name, depth: api.depth}}, [
			h(BEBlockActions, {props: {api}, slot: "header"}),
			h("div", {class: "be-settings-row flex-column"}, [
				h("span", "Preset"),
				h("div", {class: "d-flex flex-wrap be-settings-columns-presets"}, presets.map((preset, index) =>
					h("div", {
							class: `preset ${api.options.preset === index ? "is-active" : ""}`,
							on: {click: () => api.setOptions({preset: index === api.options.preset ? -1 : index})}
						},
						Array(preset.columns)
							.fill(undefined)
							.map((_, column) => h("div", {class: "column", style: {flexGrow: preset.preview[column]}}))
					)
				))
			]),
			optional(api.options.preset === -1, () => rangeField(h, "Amount of columns", () => api.options.columns, columns =>
			{
				api.setChildren(api.children.slice(0, columns));
				api.setOptions({columns});
			}, 2, 6, 1)),
			toggleButton(h, "Gutters", () => api.options.gutters, gutters => api.setOptions({gutters})),
			optionAdditionalClasses(h, api)
		]);
	}


}
