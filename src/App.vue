<template>
	<v-app>
		<!-- <HelloWorld></HelloWorld> -->
		<v-main class="grey lighten-4 mx-4 mb-4">
			<router-view></router-view>
		</v-main>
	</v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
