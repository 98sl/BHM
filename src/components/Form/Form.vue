<template>
  <div class="formBox">
    <el-form ref="form" :model="model" :rules="rules" :label-width="labelWidth">
      <slot />
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'BhmForm',
  provide() {
    return {
      Form: this
    }
  },
  props: {
    model: {
      type: Object
    },
    rules: {
      type: Object
    },
    labelWidth: {
      type: String
    }
  },
  methods: {
    validate(cb) {
      const promise = this.$children
        .filter(item => item.prop)
        .map(child => child.startValidate())
      Promise.all(promise)
        .then(data => {
          cb(true)
        })
        .catch(err => cb(false))
    }

  }
}
</script>

<style lang="scss" scoped>

.formBox{

}
</style>
