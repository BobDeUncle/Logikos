<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<nav>
	<ul>
		<li><a href={resolve('/')} class="font-navigation">HOME</a></li>
		<li><a href={resolve('/blog')} class="font-navigation">BLOG</a></li>
		<li><a href={resolve('/sermons')} class="font-navigation">SERMONS</a></li>

		<li style="margin-left: auto">
			<a href="https://substack.com/@jessemansbridge/posts" target="_blank" class="font-navigation">
				SUBSTACK
			</a>
		</li>
	</ul>
</nav>

<style>
	ul {
		display: flex;
		padding-left: 32px;
		padding-top: 32px;
		padding-bottom: 32px;
	}

	ul > li {
		display: inline-block;
		margin-right: 2rem;
	}

	li > a {
		text-decoration: none;
		font-size: 1.15rem;
		color: var(--color-primary-950);
	}
</style>
