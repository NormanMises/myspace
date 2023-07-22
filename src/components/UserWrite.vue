<template>
    <div class="card edit-field">
        <div class="card-body">
            <label for="edit-post" class="form-label">编辑帖子</label>
            <textarea v-model="content" class="form-control" id="edit-post" rows="3"></textarea>
            <button @click="submit" type="button" class="btn btn-primary btn-sm">发帖</button>
        </div>
    </div>
</template>

<script>
import {ref} from "vue";

export default {
    name: "UserWrite",
    setup(props,context) {
        let content = ref('');

        const submit = () => {
            if (!content.value) return;
            context.emit('submit', content.value);
            content.value = '';
        }
        return {
            content,
            submit,
        }

    }
}
</script>

<style scoped>
.edit-field {
    margin-top: 20px;
}

button {
    margin-top: 10px;
}
</style>