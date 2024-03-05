<template >
    <v-row justify="center">
    <v-dialog
      v-model="props.dialog"
      activator="parent"
      persistent
      width="600"
    >
      <v-card>
        <v-card-title>
          <span class="text-h5">Новая задача</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
              >
                <v-text-field
                  label="Имя задачи*"
                  required
                  v-model.trim="formData.name"
                ></v-text-field>
              </v-col>
              
              <v-col
                cols="12"
               
              >
              <v-textarea
                  label="Описание*"
                  required
                  v-model.trim="formData.description"
                ></v-textarea>
              </v-col>
            </v-row>
          </v-container>
          <small>*Обязательные поля</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue-darken-1"
            variant="text"
            :loading="store.is_loading"
            :disabled="store.is_loading"
            @click="clear(); $emit('closeDialog')"
          >
            Close
          </v-btn>
          <v-btn
            color="green-darken-1"
            variant="text"
            :loading="store.is_loading"
            :disabled="store.is_loading"
            @click="save()"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script setup>
    import { ref } from 'vue'
    import {useAppStore} from '@/store/app'

    const store = useAppStore();

    const props = defineProps(['dialog']);
    const emit = defineEmits(['closeDialog'])


    const formData =  ref({
        name: '',
        description: '',
    })
    
    function clear() {
        formData.value = {
          name: '',
          description: '',
        };
        close();
    }
    function close() {
        emit('closeDialog');
    }
    function save() {
        if(formData.value.name!='' && formData.value.description!='') {
          store.CREATE_TASK(formData.value)
          clear()
        }
        
    }
</script>
<style lang="">
    
</style>