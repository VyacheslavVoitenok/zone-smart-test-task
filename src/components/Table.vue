<template lang='pug'>
    .table-wrapper
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
            .table__results
                TableResults(
                    v-for='product in this.$store.state.products'
                    :key='product.id'
                    :product_data='product'
                )
            .table__pages
                LeftArrow.table__pages-btn(@click.native='pagesDecrement')
                p.table__pages-counter {{firstElement}} — {{LastElement > 151 ? this.$store.state.amount_of_prosucts : LastElement}} из {{this.$store.state.amount_of_prosucts}}
                RightArrow.table__pages-btn(@click.native='pagesIncrement')
</template>

<script>
import Magnifier from './image-components/Magnifier'
import LeftArrow from './image-components/LeftArrow'
import RightArrow from './image-components/RightArrow'
import TableResultsHeaders from './table-components/TableResultsHeaders'
import TableResults from './table-components/TableResults'

import { mapActions } from 'vuex';

export default {
    name: 'Table',
    components: {
        Magnifier,
        TableResultsHeaders,
        TableResults,
        LeftArrow,
        RightArrow
    },
    methods: {
        ...mapActions([
            'getProductData'
        ]),

        pagesIncrement() {
            if(this.$store.state.amount_of_prosucts - this.LastElement < 10) {
                this.pages.offset += 10
                return this.getProductData({limit: 1, offset: this.LastElement-10})
            }
            if(this.LastElement + 10 <= this.$store.state.amount_of_prosucts) {
                this.pages.offset += 10
                this.getProductData({limit: 10, offset: this.pages.offset})
            }
        },

        pagesDecrement() {
            if(this.pages.offset >= 1) {
                this.pages.offset -= 10
                this.getProductData({limit: 10, offset: this.pages.offset})
            }
        }
    },
    computed: {
        firstElement() {
            return this.pages.offset + 1
        },
        LastElement() {
            return this.pages.offset + 10
        }
    },
    data() {
        return {
            pages: {
                limit: 10,
                offset: 0,
                amountOfProducts: this.$store.state.amount_of_prosucts
            }
        }
    },
    mounted() {
        this.getProductData(this.pages)
    }
}
</script>

<style lang='sass'>
.table-wrapper
    width: 100%
    height: 100vh

.table
    width: 100vw
    padding: 30px 30px 87px 30px
    box-sizing: border-box
    background: #F6F9FC

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

.table__results
    margin-top: 10px
    padding: 0px 20px
    background: #FFFFFF
    border-radius: 4px

.table__pages
    display: flex
    align-items: center
    justify-content: flex-end

.table__pages-counter
    margin: 25px 10px
    font-family: Roboto
    font-style: normal
    font-size: 14px
    color: #152739
    opacity: 0.4

.table__pages-btn
    cursor: pointer
</style>