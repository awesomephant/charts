import textwrap
import squarify
from matplotlib import pyplot as plt
from matplotlib import colormaps

def sum_tree(tree, key=None):
	return sum([sum_tree(n, key) if isinstance(n, list) else n[key] if key else n for n in tree])

def sort_tree(tree, key=None):
	lis = [i for i, t in enumerate(tree) if isinstance(t, list)]
	for i in lis:
		tree[i] = sorted(tree[i], key=lambda x: sum_tree(x, key) if isinstance(x, list) else x[key] if key else x, reverse=True)
		sort_tree(tree[i], key)
	return tree[0]

def plot_nested_treemap(tree, fig, ax: plt.Axes, key=None, label=None):
	cmap = colormaps.get_cmap('tab20c')
	bbox = ax.get_window_extent().transformed(fig.dpi_scale_trans.inverted())
	def plot_treemap(tree, ax: plt.Axes, x = 0, y = 0, w = 100, h = 100, color=None, edgecolor="white", level=0):
		flat = squarify.normalize_sizes([sum_tree(x, key) if isinstance(x, list) else x[key] if key else x for x in tree], w, h)
		sq = squarify.squarify(flat, x, y, w, h)
		p = .5
		padding = (bbox.height / bbox.width * p, p)
		for i, s in enumerate(sq):
			ax.bar(x=s["x"] + s["dx"] / 2, bottom=s["y"], width=s["dx"], height=s["dy"], color=cmap(i) if level == 0 else "none", edgecolor=edgecolor, label={"js"} if level == 0 else None)
			if isinstance(tree[i], list):
				plot_treemap(tree[i], ax=ax, x=s["x"], y=s["y"], w=s["dx"], h=s["dy"], color="none", edgecolor="white", level=level+1)
			else:
				if label and s["dx"] * s["dy"] > 39:
					text ='\n'.join(textwrap.wrap(tree[i][label], round(s["dx"] * 1.75)))
					# text = tree[i][label]
					ax.text(s=text, x=s["x"] + padding[0], y=s["y"] + s["dy"] - padding[1], va="top")
	plot_treemap(tree, ax, color="pink")
	ax.set_xlim(0, 100)
	ax.set_ylim(0, 100)