import { raf } from "../../js/util/dom";

const handler = "latte:clickaway-handler";

function bind(el, binding)
{
	unbind(el);

	let callback = binding.value;
	let initialMactroTaskEnded = false;

	if (typeof callback !== "function")
		return;

	raf(() => initialMactroTaskEnded = true);

	el[handler] = function (evt)
	{
		if (initialMactroTaskEnded && !el.contains(evt.target))
			return callback(evt);
	};

	document.documentElement.addEventListener("click", el[handler], {passive: true});
}

function unbind(el)
{
	document.documentElement.removeEventListener("click", el[handler]);

	delete el[handler];
}

function update(el, binding)
{
	if (binding.value === binding.oldValue)
		return;

	bind(el, binding);
}

export default {

	name: "click-away",

	bind,

	unbind,

	update

}
