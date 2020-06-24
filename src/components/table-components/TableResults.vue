<template lang='pug'>
    .table-results
        input.table-results__input(type='checkbox')
        .table-results-wrapper
            p.table-results__item 1034
            .table-results__item-wrapper
                Plus 
                p.table-results__item 2 товара
            p.table-results__item 01.11.2020
            p.table-results__item В ожиданнии оплаты
            .table-results__check-mark.purchased-mark
                GreenCheckMark(v-if='isPurchased')
            .table-results__check-mark.sent-mark
                GreenCheckMark(v-if='isSent')
            .table-results__check-mark.delivered-mark
                GreenCheckMark(v-if='isDelivered')
            .table-results__sales-label
                p.table-results__sales-text ebay
            p.table-results__item Theresa Cooper
            p.table-results__item Почта России
            p.table-results__item $10
</template>

<script>
import Plus from '../image-components/Plus'
import GreenCheckMark from '../image-components/GreenCheckMark'
export default {
    name: 'TableResults',
    components: {
        Plus,
        GreenCheckMark
    },
    data() {
        return {
            isPurchased: false,
            isSent: false,
            isDelivered: false
        }
    }
}
</script>

<style lang='sass'>
.table-results-wrapper
    display: flex
    align-items: center
    width: 100%
    text-align: left
    
.table-results
    display: flex
    align-items: center
    justify-content: space-between
    padding: 14px 20px
    background: #fff
    align-items: left

.table-results__input
    width: 24px
    height: 24px
    border: 1px solid #C5C7CD
    box-sizing: border-box
    border-radius: 3px

.table-results__item
    margin: 0
    font-family: Roboto
    font-weight: normal
    font-size: 12px
    color: #132739
    text-align: left
    &:first-of-type
        margin-left: 22px
        margin-right: 55px
    &:nth-child(2)
        margin-left: 0px
    &:nth-child(3)
        margin-left: 115px
    &:nth-child(4)
        margin-left: 80px
        width: 90px
    &:nth-child(9)
        margin-left: 128px
        width: 50px
    &:nth-child(10)
        margin-left: 120px
    &:nth-child(11)
        margin-left: 155px


.table-results__item-wrapper
    display: flex
    margin-right

.table-results__check-mark
    width: 20px
    height: 20px
    background: #E5E5E5
    border-radius: 100px

.purchased-mark
    margin-left: 125px

.sent-mark
    margin-left: 100px

.delivered-mark
    margin-left: 110px

.table-results__sales-label
    display: flex
    align-items: center
    width: 38px
    padding: 10px 7px 9px 10px
    margin-left: 200px
    background: #3CC8AE
    border-radius: 2px
    font-family: Roboto
    font-style: normal
    font-weight: normal
    font-size: 10px
    color: #FFFFFF

.table-results__sales-text
        margin: 0
        margin-left: 7px
</style>