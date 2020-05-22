<template>
  <div id="app">

<div class="container-fluid">
	<div class="row">
		<div class="col-md-8">
			<img alt="Bootstrap Image Preview" src="https://www.layoutit.com/img/sports-q-c-140-140-3.jpg" />
			<div class="jumbotron">
				<h2>
					Hello, world!
				</h2>
				<p>
					This is a template for a simple marketing or informational website. It includes a large callout called the hero unit and three supporting pieces of content. Use it as a starting point to create something more unique.
				</p>
				<p>
					<a class="btn btn-primary btn-large" href="#">Learn more</a>
				</p>
			</div>
		</div>
		<div class="col-md-4">
			<div class="dropdown">
				<button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown">
					Action
				</button>
				<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
<a class="dropdown-item disabled" href="#">Action</a> <a class="dropdown-item" href="#">Another action</a> <a class="dropdown-item" href="#">Something else here</a>
				</div>
			</div>

       <b-card
    title="Card Title"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </b-card-text>

    <b-button href="#" variant="primary">Go somewhere</b-button>
  </b-card>

      <HelloWorld msg="Welcome to Your Vue.js App"/>

			<ul>
				<li class="list-item">
					Lorem ipsum dolor sit amet
				</li>
				<li class="list-item">
					Consectetur adipiscing elit
				</li>
				<li class="list-item">
					Integer molestie lorem at massa
				</li>
				<li class="list-item">
					Facilisis in pretium nisl aliquet
				</li>
				<li class="list-item">
					Nulla volutpat aliquam velit
				</li>
				<li class="list-item">
					Faucibus porta lacus fringilla vel
				</li>
				<li class="list-item">
					Aenean sit amet erat nunc
				</li>
				<li class="list-item">
					Eget porttitor lorem
				</li>
			</ul>
		</div>
	</div>
</div>


  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
