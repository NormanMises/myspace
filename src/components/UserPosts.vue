<template>
    <div class="card">
        <div class="card-body">
            <div v-for="post in posts.posts" :key="post.id">
                <div class="card single-post">
                    <div class="card-body">
<!--                        内容中用变量用 {{ }} -->
                        {{ post.content }}
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "UserPosts",
    props: {
        posts: {
            type: Object,
            required: true,
        },
    }
}
</script>

<style scoped>
.single-post {
    margin-bottom: 10px;
}
</style>