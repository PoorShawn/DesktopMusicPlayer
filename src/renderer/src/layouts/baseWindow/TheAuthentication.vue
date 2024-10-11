<template>
    <BaseProfileLoginForm v-if="isLogin"/>
    <BaseProfilePasswrodForm v-else-if="isPasswordReset"/>
    <BaseProfileCreateForm v-else-if="isSignUp"/>

    <!-- test -->
    <button @click="toggoleToLogin">login</button>
    <button @click="toggoleToPasswordReset">Reset Password</button>
    <button @click="toggoleToSignUp">sign up</button>
    <br>
    <br>
</template>
  
<script setup lang="ts">
import { computed, ref } from 'vue';
import BaseProfileLoginForm from '@renderer/components/forms/BaseProfileLoginForm.vue';
import BaseProfilePasswrodForm from '@renderer/components/forms/BaseProfilePasswrodForm.vue';
import BaseProfileCreateForm from '@renderer/components/forms/BaseProfileCreateForm.vue';

const activeForm = ref('login');
const isLogin = computed(() => activeForm.value === 'login');
const isPasswordReset = computed(() => activeForm.value === 'passwordReset');
const isSignUp = computed(() => activeForm.value === 'signUp');

// test
const toggoleToLogin = () => activeForm.value = 'login'
const toggoleToPasswordReset = () => activeForm.value = 'passwordReset'
const toggoleToSignUp = () => activeForm.value = 'signUp'
</script>
  
<style lang="scss">
</style>