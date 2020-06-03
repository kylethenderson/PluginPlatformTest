// Import and build components

// get the directories to build the components from
const dirs = require.context(
	'../components',
	true,
	/(index\.vue)$/
).keys().map(filename => {
	const split = filename.split('/');
	return split[1];
})

const routes = [];

dirs.forEach(dir => {
	const config = require(`../components/${dir}/config.js`);
	const route = {
		path: config.path,
		name: config.name,
		component: () => import(`@/components/${dir}`)
	};
	routes.push(route);
});

export default routes;