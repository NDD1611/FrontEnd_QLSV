<script>
import { mapGetters } from "vuex";
import Menu from "./Menu.vue"
import Service from "../service/Service.js"
export default {
    data() {
        return {
            dataV: {},
            genderIsNam: true
        }
    },
    components: {
        Menu
    },
    async mounted() {
        this.dataV = this.getDataViewSv
        let fullInfoSv = await Service.getFullInfoSv(this.dataV.masv)
        this.dataV = fullInfoSv.data
        console.log(this.dataV)
        if (this.dataV.gender == 1) {
            this.genderIsNam = true
        } else {
            this.genderIsNam = false
        }
    },
    computed: {
        ...mapGetters(['getDataViewSv'])
    },
    methods: {
        handleQ() {
            this.$router.push('list')
        }
    }
}
</script>
    
<template>
    <div id="ViewSinhVien">
        <div class="nav">
            <Menu></Menu>
        </div>
        <div class="right">
            <div class="content">
                <div class="avatar">
                    <div class="image_avatar">
                        <img v-if="this.genderIsNam" src="../assets/avatar_male.jpg" alt="">
                        <img v-if="!this.genderIsNam" src="../assets/avatar_female.png" alt="">
                    </div>
                </div>
                <div class="detail">
                    <div class="head">
                        <diV>
                            Thông Tin Sinh Viên
                        </diV>
                        <div class="quay_lai" @click="handleQ()">
                            Quay Lại
                        </div>
                    </div>
                    <div class="line_detail">
                        <div class="span1">
                            Mã Số Sinh Viên:
                        </div>
                        <div class="span2">
                            {{ this.dataV.masv }}
                        </div>
                    </div>
                    <div class="line_detail">
                        <div class="span1">
                            Mã Lớp:
                        </div>
                        <div class="span2">
                            {{ this.dataV.malop }}
                        </div>
                    </div>
                    <div class="line_detail">
                        <div class="span1">
                            Khóa Học:
                        </div>
                        <div class="span2">
                            {{ this.dataV.khoahoc }}
                        </div>
                    </div>
                    <div class="line_detail">
                        <div class="span1">
                            Tên:
                        </div>
                        <div class="span2">
                            {{ this.dataV.name }}
                        </div>
                    </div>
                    <div class="line_detail">
                        <div class="span1">
                            Email:
                        </div>
                        <div class="span2">
                            {{ this.dataV.email }}
                        </div>
                    </div>
                    <div class="line_detail">
                        <div class="span1">
                            Giới Tính:
                        </div>
                        <div class="span2">
                            {{ this.dataV.gender == 1 ? "Nam" : "Nữ" }}
                        </div>
                    </div>
                    <div class="line_detail">
                        <div class="span1">
                            Tên Của Cha:
                        </div>
                        <div class="span2">
                            {{ this.dataV.namePa }}
                        </div>
                    </div>
                    <div class="line_detail">
                        <div class="span1">
                            Tên Của Mẹ:
                        </div>
                        <div class="span2">
                            {{ this.dataV.nameMe }}
                        </div>
                    </div>
                    <div class="line_detail">
                        <div class="span1">
                            Ngày Sinh:
                        </div>
                        <div class="span2">
                            {{ this.dataV.date }}
                        </div>
                    </div>
                    <div class="line_detail">
                        <div class="span1">
                            Điểm Trung Bình Tích Lũy:
                        </div>
                        <div class="span2">
                            {{ this.dataV.diemtb }}
                        </div>
                    </div>
                    <div class="line_detail">
                        <div class="span1">
                            Số Tín Chỉ Tích Lũy:
                        </div>
                        <div class="span2">
                            {{ this.dataV.tinchi }}
                        </div>
                    </div>
                    <div class="line_detail">
                        <div class="span1">
                            Địa Chỉ:
                        </div>
                        <div class="span2">
                            {{ this.dataV.address }}
                        </div>
                    </div>
                    <div class="line_detail">
                        <div class="span1">
                            Số Điện Thoại:
                        </div>
                        <div class="span2">
                            {{ this.dataV.phone }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
    
<style lang="scss" scoped>
#ViewSinhVien {
    display: flex;
    width: 100vw;

    .right {
        border: 1px solid blue;
        width: 100%;
        background-color: #f0f1f3;

        .content {
            background-color: #fff;
            display: flex;
            margin: 30px;

            .avatar {
                flex: 2;

                .image_avatar {
                    width: 225px;
                    height: 225px;
                    padding: 20px;

                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
            }

            .detail {
                flex: 8;

                .head {
                    font-size: 30px;
                    font-weight: 600;
                    margin-top: 20px;
                    position: relative;

                    .quay_lai {
                        position: absolute;
                        font-size: 20px;
                        right: 30px;
                        top: 0;
                        border-radius: 5px;
                        padding: 10px;
                        background-color: #d74739;
                        cursor: pointer;
                    }
                }

                .line_detail {
                    margin: 40px 0;

                    .span1 {
                        display: inline-block;
                        width: 300px;
                    }

                    .span2 {
                        display: inline-block;
                    }

                }
            }
        }
    }
}
</style>