import { BlockBase } from "../block";
import { render, renderEditor } from "../primitive/text";
import { optionTextColor } from "../primitive/element";
import { blockActions, settingsGroup } from "../primitive/settings";

const headers = [
	{tag: "h1", icon: "format-header-1", name: "Header 1"},
	{tag: "h2", icon: "format-header-2", name: "Header 2"},
	{tag: "h3", icon: "format-header-3", name: "Header 3"},
	{tag: "h4", icon: "format-header-4", name: "Header 4"},
	{tag: "h5", icon: "format-header-5", name: "Header 5"},
	{tag: "h6", icon: "format-header-6", name: "Header 6"}
];

export class HeadingBlock extends BlockBase
{

	get defaultOptions()
	{
		return {
			color: undefined,
			type: "h3",
			text: ""
		};
	}

	get description()
	{
		return "Represents a header text."
	}

	get keywords()
	{
		return ["header", "heading", "text", "h1", "h2", "h3", "h4", "h5", "h6"];
	}

	get name()
	{
		return "Header";
	}

	constructor()
	{
		super("heading", "text", "format-header-1");
	}

	render(h, api)
	{
		return render(api.options.type, h, api);
	}

	renderEditor(h, api)
	{
		return renderEditor(api.options.type, h, api);
	}

	renderOptions(h, api)
	{
		return settingsGroup(h, this.name, [
			blockActions(h, api),
			optionTextColor(h, api),
			h("div", {class: "be-settings-row"}, headers.map(header => h("button", {
				class: `btn btn-icon ${header.tag === api.options.type ? "btn-primary btn-contained" : "btn-dark btn-text"}`,
				on: {click: () => api.setOptions({type: header.tag})},
				style: {flex: "1 1 0"}
			}, [
				h("i", {class: `mdi mdi-${header.icon}`})
			])))
		]);
	}

}
