<template>
  <div class="custom-select" :tabindex="tabindex" @blur="open = false">
    <div class="selected" :class="{ open: open }" @click="open = !open">
      {{ selected }}
    </div>
    <div class="items" :class="{ selectHide: !open }">
      <div
        v-for="(option, i) of options"
        :key="i"
        @click="
          selected = option;
          open = false;
          $emit('input', option);
        "
      >
        {{ option }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
    default: {
      type: String,
      required: false,
      default: null,
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  data() {
    return {
      selected: this.default
        ? this.default
        : this.options.length > 0
        ? this.options[0]
        : null,
      open: false,
    };
  },
  mounted() {
    this.$emit('input', this.selected);
  },
};
</script>

<style scoped>
.custom-select {
  position: relative;
  text-align: left;
  outline: none;
  height: 100%;
  line-height: 100%;
}

.custom-select .selected {
  background-color: #fff;
  border-radius: rem(6);
  border: 1px solid rgb(243, 243, 243);
	border-radius: 0.75rem;
  color: #000;
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
	height: 100%;
	display: flex;
	align-items: center;
}

.custom-select .selected.open {
  border: 1px solid rgb(243, 243, 243);
	border-radius: 0.75rem;
  /* border-radius: rem(6) rem(6) 0px 0px; */
}

.custom-select .selected:after {
  position: absolute;
  content: "";
  top: rem(22);
  right: 1em;
  width: 0;
  height: 0;
  border: rem(5) solid transparent;
  border-color: #fff transparent transparent transparent;
}

.custom-select .items {
  color: #fff;
  border-radius: 0px 0px rem(6) rem(6);
  overflow: hidden;
  border-right: 1px solid rgb(243, 243, 243);
  border-left: 1px solid rgb(243, 243, 243);
  border-bottom: 1px solid rgb(243, 243, 243);
  position: absolute;
  background-color: #fff;
  left: 0;
  right: 0;
  z-index: 1;
}

.custom-select .items div {
  color: #000;
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
	padding-top: 0.5rem;
	padding-bottom: 0.5rem;
}

.custom-select .items div:hover {
  background-color: rgb(243, 243, 243);
}

.selectHide {
  display: none;
}
</style>
