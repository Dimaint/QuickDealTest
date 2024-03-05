
import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid';
import { useStorage } from '@vueuse/core'

export const useAppStore = defineStore('app', {
  state: () => ({
    tasks: useStorage('taskApp',[
      {
        id: 0,
        name: 'test',
        description: 'erree'
      },
      {
        id: 1,
        name: 'test2',
        description: 'yeytrjey'
      }
    ],
    localStorage,
    {
      mergeDefaults: true,
    },),
    is_loading: false
  }),
  actions: {
    CREATE_TASK(payload) {
      payload["id"] = uuidv4()
      this.tasks.push(payload)
    },
    DELETE_TASK(id) {
      this.tasks = this.tasks.filter(el=>el.id!=id)
    },
    EDIT_TASK(payload) {
      this.tasks = this.tasks.map(el => {
        if (el.id === payload.id) {
          return payload;
        }
        return el;
      });
    }
  }
})
