/* eslint-disable import/prefer-default-export */
import { defineStore } from 'pinia';
import axios from 'axios';

export const useSearchStore = defineStore('searchStore', {
  state: () => ({
    list: [],
  }),
  getters: {
    getList() {
      return this.list;
    },
  },
  actions: {
    async requestSearch(message) {
      try {
        axios
          .get(`http://127.0.0.1:3096/newsletters/search/${message}`)
          .then((response) => {
            this.list = response.data;
          });
        return 0;
      } catch (error) {
        return error;
      }
    },
  },
});

export const useOneStore = defineStore('oneStore', {
  state: () => ({
    list: [],
    obj: {},
  }),
  getters: {
    getList() {
      return this.list;
    },
    getObj() {
      return this.obj;
    },
  },
  actions: {
    async requestAll() {
      try {
        axios
          .get('http://127.0.0.1:3096/newsletters/all')
          .then((response) => {
            this.list = response.data;
          });
        return 0;
      } catch (error) {
        return error;
      }
    },
    async requestOne(id) {
      try {
        axios
          .get(`http://127.0.0.1:3096/newsletters/news/${id}`)
          .then((response) => {
            this.obj = response;
          });
        return 0;
      } catch (error) {
        return error;
      }
    },
  },
});

export const useDailyStore = defineStore('dailyStore', {
  state: () => ({
    name: 'Daily News',
    list: [],
  }),
  getters: {
    getName() {
      return this.name;
    },
    getList() {
      return this.list;
    },
  },
  actions: {
    async requestDaily(ischoosen) {
      try {
        axios
          .get(`http://127.0.0.1:3096/newsletters/daily/${ischoosen}`)
          .then((response) => {
            this.list = response.data;
          });
        return 0;
      } catch (error) {
        return error;
      }
    },
  },
});

export const useWeeklyStore = defineStore('weeklyStore', {
  state: () => ({
    name: 'Weekly News',
    list: [],
  }),
  getters: {
    getName() {
      return this.name;
    },
    getList() {
      return this.list;
    },
  },
  actions: {
    async requestWeekly(ischoosen) {
      try {
        axios
          .get(`http://127.0.0.1:3096/newsletters/weekly/${ischoosen}`)
          .then((response) => {
            this.list = response.data;
          });
        return 0;
      } catch (error) {
        return error;
      }
    },
  },
});

export const useMonthlyStore = defineStore('monthlyStore', {
  state: () => ({
    name: 'Monthly News',
    list: [],
  }),
  getters: {
    getName() {
      return this.name;
    },
    getList() {
      return this.list;
    },
  },
  actions: {
    async requestMonthly(ischoosen) {
      try {
        axios
          .get(`http://127.0.0.1:3096/newsletters/monthly/${ischoosen}`)
          .then((response) => {
            this.list = response.data;
          });
        return 0;
      } catch (error) {
        return error;
      }
    },
  },
});

export const useGlobalStore = defineStore('globalStore', {
  state: () => ({
    name: 'Global News',
    list: [],
  }),
  getters: {
    getName: (state) => state.name,
    getList: (state) => state.list,
  },
  actions: {
    async requestGlobal(ischoosen) {
      try {
        axios
          .get(`http://127.0.0.1:3096/newsletters/globaly/${ischoosen}`)
          .then((response) => {
            this.list = response.data;
          });
        return 0;
      } catch (error) {
        return error;
      }
    },
  },
});
