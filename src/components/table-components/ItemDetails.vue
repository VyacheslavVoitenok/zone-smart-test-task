<template lang='pug'>
    .item-details
        OrderPicture.item-details__image
        .item-details__description
            h4.item-details__text.item-details__text_bold {{product_details.items[0].title}}
            p.item-details__text.item-details__text_gray {{product_details.items[0].sku}}
        p.item-details__text.item-details__amount {{product_details.items[0].quantity}}
        p.item-details__text.item-details__amount-sent 1
        p.item-details__text.item-details__price ${{product_details.items[0].price}}
        p.item-details__text.item-details__worth $10
</template>

<script>
import OrderPicture from '../image-components/OrderPicture'

export default {
    name: 'ItemDetails',
    components: {
        OrderPicture
    },
    props: {
        product_details: {
            type: Object,
            default() {
                return {}
            }
        }
    }
}
</script>

<style lang='sass'>
.item-details
    width: 100%
    padding: 10px 36px
    display: flex
    box-sizing: border-box
    justify-content: space-between
    align-items: center
    background: #FFFFFF
    border-bottom: 1px solid #C5C7CD
    &:last-child
        border-bottom: none

.item-details__description
    display: flex
    flex-direction: column

.item-details__image
    width: 40px
    height: 40px
    
.item-details__text
    margin: 0
    font-family: Roboto
    font-style: normal
    font-weight: normal
    font-size: 12px
    color: #132739

.item-details__text_bold
    font-style: bold

.item-details__text_gray
    opacity: 0.5
</style>