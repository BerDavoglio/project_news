<template>
  <div>
    <NewsTopicComponent />
    <div class="border-[1px] mx-[14rem]"></div>
    <NewsThrendWeekComponent />
  </div>
</template>

<script>
import NewsTopicComponent from './NewsTopic/NewsTopicComponent.vue';
import NewsThrendWeekComponent from './NewsThrendWeek/NewsThrendWeekComponent.vue';

export default {
  name: 'HomeComponent',
  components: { NewsTopicComponent, NewsThrendWeekComponent, },
};
</script>
