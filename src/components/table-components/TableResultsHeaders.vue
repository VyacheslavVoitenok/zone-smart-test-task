<template lang='pug'>
    .table-results-headers
        input.table-results-headers__input(type='checkbox')
        .table-results-headers-wrapper
            p.table-results-headers__header ID
            p.table-results-headers__header Товары
            p.table-results-headers__header Дата заказа
            p.table-results-headers__header Статус
            p.table-results-headers__header Оплачено
            p.table-results-headers__header Отправлено
            p.table-results-headers__header Доставлено
            p.table-results-headers__header Канал продаж
            p.table-results-headers__header Покупатель
            p.table-results-headers__header Метод отправки
            p.table-results-headers__header Стоимость
</template>

<script>
export default {
    name: 'TableResultsHeaders'
}
</script>

<style lang='sass'>
.table-results-headers-wrapper
    display: flex
    width: 100%

.table-results-headers
    display: flex
    align-items: center
    padding: 14px 20px
    margin-top: 21px
    background: #FFFFFF
    border-radius: 6px

.table-results-headers__input
    width: 24px
    height: 24px
    margin-left: 0px
    border: 1px solid #C5C7CD
    box-sizing: border-box
    border-radius: 3px

.table-results-headers__header
    margin: 0
    font-family: Roboto
    font-style: normal
    font-size: 16px
    line-height: 14px
    color: #132739
    opacity: 0.5
    &:first-of-type
        margin-left: 22px
    &:nth-child(2)
        margin-left: 70px
    &:nth-child(3)
        margin-left: 120px       
    &:nth-child(4)
        margin-left: 50px
    &:nth-child(5)
        margin-left: 140px
    &:nth-child(6)
        margin-left: 40px
    &:nth-child(7)
        margin-left: 40px
    &:nth-child(8)
        margin-left: 140px
    &:nth-child(9)
        margin-left: 105px
    &:nth-child(10)
        margin-left: 75px
    &:nth-child(11)
        margin-left: 75px
    &:last-of-type
        margin-right: 0px
</style>