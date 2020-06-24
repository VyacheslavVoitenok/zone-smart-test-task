<template lang='pug'>
    .table
        .table__header-wrapper
            h1.table__header Таблица заказов
            .table__buttons
                button.table__button.table__button_send Отправления
                button.table__button.table__button_export Экспортировать
        .table__filters
            button.table__button.table__button-filter Фильтр
            .table__input-wraper
                input.table__search-input(type='text' placeholder='Поиск')
                Magnifier
        TableResultsHeaders
        TableResults
</template>

<script>
import Magnifier from './image-components/Magnifier'
import TableResultsHeaders from './table-components/TableResultsHeaders'
import TableResults from './table-components/TableResults'

export default {
    name: 'Table',
    components: {
        Magnifier,
        TableResultsHeaders,
        TableResults
    }
}
</script>

<style lang='sass'>
.table
    width: 100vw
    padding: 30px 30px 87px 30px
    box-sizing: border-box
    background: #E5E5E5

.table__header
    margin: 0
    font-family: Roboto
    font-weight: bold
    font-size: 36px
    color: #152739

.table__buttons
    margin-top: auto
    margin-bottom: auto

.table__button
    padding: 9px 14px
    border-radius: 4px
    font-family: Roboto
    font-size: 14px
    letter-spacing: 1px
    text-transform: uppercase
    color: #FFFFFF
    border: none
    cursor: pointer
    outline: none

.table__button_send
    margin-right: 10px
    background: #0F1B25

.table__button_export
    background: #3CC8AE

.table__header-wrapper
    display: flex
    justify-content: space-between

.table__filters
    display: flex
    width: 100%
    margin-top: 31px

.table__button-filter
    height: 52px
    background: #132739;
    margin-right: 29px

.table__input-wraper
    display: flex
    align-items: center 
    width: 100% 
    border: 1px solid #C5C7CD
    border-radius: 6px
    background: #FFFFFF

.table__search-input
    width: 97%

</style>