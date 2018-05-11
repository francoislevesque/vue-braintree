<template>
    <div class="payment">
        <div ref="dropin"></div>
        <button ref="submit" class="btn btn-primary" :disabled="loading">Pay</button>
    </div>
</template>

<script>
    import dropIn from 'braintree-web-drop-in'

    export default {
        props: {
            token: {
                required: true,
                type: String
            },
            url: {
                type: String,
                default: '/pay'
            }
        },
        data () {
            return {
                loading: false, // When a payment is processed, prevents double clicks
                disabled: false // When a payment is successfully processed, the entire component is disabled
            }
        },
        mounted() {
            let vm = this
            dropIn.create({
                authorization: this.token,
                container: vm.$refs.dropin,
                paypal: {
                    flow: 'vault'
                }
            }, function (createErr, instance) {
                vm.$refs.submit.addEventListener('click', function () {
                    if (! vm.loading && ! vm.disabled) {
                        instance.requestPaymentMethod(function (err, payload) {
                            // If validations errors are encountered, the payload will be undefined
                            if (payload !== undefined) {
                                vm.loading = true
                                vm.pay(payload.nonce)
                            }
                        })
                    }
                })
            })
        },
        destroyed() {
            vm.$refs.submit.removeEventListenter('click')
        },
        methods: {
            pay (nonce) {
                axios.post(this.url, {nonce: nonce})
                .then(response => {
                    this.$emit('success')
                    this.loading = false
                    this.disabled = true
                })
                .catch(error => {
                    this.$emit('fail', error.response.data.message)
                    this.loading = false
                })
            }
        }
    }
</script>
