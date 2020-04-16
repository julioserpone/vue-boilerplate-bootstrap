<template>
    <div>
        <b-table striped hover
                 :items="items"
                 :busy="isBusy">
            <template v-slot:table-busy>
                <div class="text-center text-danger my-2">
                    <b-spinner class="align-middle"></b-spinner>
                    <strong>Loading...</strong>
                </div>
            </template>
        </b-table>
    </div>
</template>

<script>
    import itemService from '../services/items'

    export default {
        data() {
            return {
                isBusy: false,
                items: []
            }
        },
        mounted () {

            try {
                itemService.allItems().then( (response) => {
                    this.items = response.slice(1,20)
                    this.isBusy = false
                }).catch((error) => {
                    console.log(error)
                })
            } catch(e) {
                // error
            }
        },
    }
</script>
