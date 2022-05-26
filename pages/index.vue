<template>
  <div>
    {{ message }}
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  async asyncData (context) {
    const response = await context.$axios.get('http://localhost:3000/api/AllStaffFromClient')
    return {
      message: response.data.message
    }
  }
}
</script>
