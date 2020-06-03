<template>
	<v-app>
		<v-app-bar app color="primary" dark>
			<v-toolbar-title>Plugin Test</v-toolbar-title>
			<v-spacer></v-spacer>
			<template v-for="(item, index) in menuItems">
				<v-btn text :to="item.path" :key="index">{{ item.text }}</v-btn>
			</template>
		</v-app-bar>

		<v-content>
			<router-view></router-view>
		</v-content>
	</v-app>
</template>

<script>
export default {
	name: "App",

	components: {},

	data: () => ({
		//
		menuItems: []
	}),
	methods: {
		//
		createMenuItems() {
			const dirs = this.$root.$data.state.directories;

			this.menuItems = dirs.map(dir => {
				return {
					text: dir.charAt(0).toUpperCase() + dir.slice(1),
					path: `/${dir}`
				};
			});
		}
	},
	created() {
		this.createMenuItems();
	}
};
</script>
