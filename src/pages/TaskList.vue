<template>
    <div class="d-flex align-center flex-column">
        <v-btn @click="goBack()" icon="mdi-arrow-left" class="mr-auto"></v-btn>
        <div class="mt-4 text-title-1">Список задач</div>

        <v-card class="my-3" width="400" v-for="item in store.tasks " :key="item.id">
            <v-card-item>
                <v-card-title>{{ item.name }}</v-card-title>

                <v-card-subtitle>{{ item.description }}</v-card-subtitle>

            </v-card-item>


            <v-card-actions><v-spacer></v-spacer><v-btn @click="editDialog = true; selectedTask = item;"
                    color="yellow">edit</v-btn><v-btn @click="deleteTask(item.id)"
                    color="red">delete</v-btn></v-card-actions>
        </v-card>
        <v-btn @click="createDialog = true" color="green">Создать новую</v-btn>
    </div>
    <create-task-dialog :dialog="createDialog" @close-dialog="closeCreateDialog" />
    <edit-task-dialog :dialog="editDialog" :task="selectedTask" @close-dialog="closeEditDialog" />
</template>

<script setup>
import { useAppStore } from '@/store/app'
import { useRouter } from 'vue-router'
import { ref } from "vue";

const router = useRouter()
const store = useAppStore();
const createDialog = ref(false);
const editDialog = ref(false);
const selectedTask = ref();

function closeCreateDialog() {
    createDialog.value = false
}
function closeEditDialog() {
    editDialog.value = false;
    selectedTask.value = false;
}
function goBack() {
    window.history.length > 1 ? router.go(-1) : router.push('/')
}
function deleteTask(id) {
    store.DELETE_TASK(id)
}
</script>