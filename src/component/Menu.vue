<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
    data() {
        return {
            isShowChangePass: false,
            trangchu: false,
            cv1: false,
            cv2: false,
            cv3: false,
            cv4: false,
            cv5: false,
            cv6: false,
            sv1: false,
            sv2: false,
            sv3: false,
            sv4: false,
            thongbao: false
        }
    },
    computed: {
        ...mapGetters(['isShowDropDownCVHT', 'isShowDropDownSV', 'isShowDropDownAccount', 'isShowText', 'getCurrentMenu'])
    },
    methods: {
        ...mapMutations(["showToast", 'setIsShowDropDownCVHT', 'setIsShowDropDownSV', 'setIsShowDropDownAccount', 'closeMenu', 'openMenu', 'setCurrentMenu', "setDataEditSv", "setDataViewSv"]),
        openClick() {

            this.openMenu()
            let menu = document.getElementById("Menu")
            let nav = document.querySelector(".nav_back")
            if (menu) {
                menu.classList.add("openMenu")
                menu.classList.remove("closeMenu")
                nav.classList.add("openNav")
                nav.classList.remove("closeNav")
            }
        },
        closeClick() {
            this.closeMenu()
            let menu = document.getElementById("Menu")
            let nav = document.querySelector(".nav_back")
            if (menu) {
                menu.classList.remove("openMenu")
                menu.classList.add("closeMenu")
                nav.classList.remove("openNav")
                nav.classList.add("closeNav")
            }
        },
        clickCurrentMenu(str) {
            sessionStorage.setItem("currentmenu", JSON.stringify(str))
            // this.rerender = false
            // this.$nextTick(() => {
            //     this.rerender = true
            // })
        },
        handleClickCVHT() {
            let infoLogin = JSON.parse(sessionStorage.getItem('infoLogin'))
            if (infoLogin) {
                if (infoLogin.role === 'teacher' || infoLogin.role === 'admin') {
                    this.setIsShowDropDownCVHT('drop_down_cvht')
                } else {
                    let infoToast = {
                        type: "warning",
                        mes: "B???n Kh??ng c?? quy???n truy c???p v??o ????y"
                    }
                    this.showToast(infoToast)
                    // alert("B???n Kh??ng c?? quy???n truy c???p v??o ????y")
                }
            } else {
                alert("B???n ch??a ????ng nh???p. Vui l??ng ????ng nh???p")
                this.$router.replace({ path: "/login" })
            }
        },
        handleClickSV() {
            let infoLogin = JSON.parse(sessionStorage.getItem('infoLogin'))
            if (infoLogin) {
                if (infoLogin.role === 'student') {
                    this.setIsShowDropDownSV('drop_down_sv')
                } else {
                    let infoToast = {
                        type: "warning",
                        mes: "B???n Kh??ng c?? quy???n truy c???p v??o ????y"
                    }
                    this.showToast(infoToast)
                    // alert("B???n Kh??ng c?? quy???n truy c???p v??o ????y")
                }
            } else {
                alert("B???n ch??a ????ng nh???p. Vui l??ng ????ng nh???p")
                this.$router.replace({ path: "/login" })
            }
        },
        handleClickAccount() {
            this.setIsShowDropDownAccount('drop_down_account')
        },
        clickUpdateSv(str) {
            let infoLogin = JSON.parse(sessionStorage.getItem("infoLogin"))
            this.setDataEditSv(infoLogin)
        },
        clickViewSv(str) {
            let infoLogin = JSON.parse(sessionStorage.getItem("infoLogin"))
            this.setDataViewSv(infoLogin)
        },
        logOut() {
            sessionStorage.clear()
            this.$router.replace('/login')
        },
        changePassword() {
            this.$router.replace("/changepass")
        },
        xemDiemSV() {
            let infoLogin = JSON.parse(sessionStorage.getItem('infoLogin'))
            let masv = infoLogin.masv
            sessionStorage.setItem('masvDiemHK', JSON.stringify(masv))
        }
    }, beforeMount() {
        let currentmenu = JSON.parse(sessionStorage.getItem('currentmenu'))
        this[currentmenu] = true
    }

}
</script>
<template>
    <div class="nav_back"></div>
    <div id="Menu">
        <div :class="this.isShowText == false ? 'centerText' : 'head'" id="SHOWMENU">
            <div class="left" v-if="this.isShowText">MENU</div>
            <div class="right">
                <div class="openMenu" v-if="!this.isShowText" @click="openClick()">
                    <i class="fa-solid fa-bars"></i>
                </div>
                <div class="closeMenu" @click="closeClick()" v-if="this.isShowText">
                    <i class="fa-solid fa-xmark"></i>
                </div>
            </div>
        </div>
        <div class="borderUnder" :class="this.isShowText == false ? 'justify_content_center' : ''">
            <i class="fa-solid fa-house"></i>
            <router-link to="/" class="home_js hover_color" :class="this.trangchu == true ? 'current_menu' : ''"
                @click="clickCurrentMenu('trangchu')">
                <div v-if="this.isShowText">
                    Trang ch???
                </div>
            </router-link>
        </div>
        <div class="borderUnder cvht_js hover_color" :class="this.isShowText == false ? 'justify_content_center' : ''"
            @click="handleClickCVHT()">
            <i class="fa-solid fa-user-tie"></i>
            <div v-if="this.isShowText">
                C??? v???n
            </div>
            <i class="fa-solid fa-angle-down iconRight" v-if="this.isShowText"></i>
        </div>

        <div class="drop_down_cvht dropDown" v-if="this.isShowDropDownCVHT">
            <div class="link_to">
                <router-link to="/cvht/viewinfo" class="listSv_js hover_color" :class="this.cv1 ? 'current_menu' : ''"
                    @click="clickCurrentMenu('cv1')">
                    <i class="fa-solid fa-chevron-right"></i>
                    Th??ng tin
                </router-link>
            </div>
            <div class="link_to">
                <router-link to="/cvht/updateinfo" class="listSv_js hover_color" :class="this.cv2 ? 'current_menu' : ''"
                    @click="clickCurrentMenu('cv2')">
                    <i class="fa-solid fa-chevron-right"></i>
                    C???p nh???t th??ng tin
                </router-link>
            </div>
            <div class="link_to">
                <router-link to="/cvht/addclass" class="listSv_js hover_color" :class="this.cv3 ? 'current_menu' : ''"
                    @click="clickCurrentMenu('cv3')">
                    <i class="fa-solid fa-chevron-right"></i>
                    Danh s??ch l???p h???c
                </router-link>
            </div>
            <div class="link_to">
                <router-link to="/cvht/list" class="listSv_js hover_color" :class="this.cv4 ? 'current_menu' : ''"
                    @click="clickCurrentMenu('cv4')">
                    <i class="fa-solid fa-chevron-right"></i>
                    Danh s??ch sinh vi??n
                </router-link>
            </div>
            <div class="link_to">
                <router-link to="/cvht/addSv" class="addnew_js hover_color" :class="this.cv5 ? 'current_menu' : ''"
                    @click="clickCurrentMenu('cv5')">
                    <i class="fa-solid fa-chevron-right"></i>
                    Th??m m???i sinh vi??n
                </router-link>
            </div>
            <div class="link_to">
                <router-link to="/importlisthponsv" class="addnew_js hover_color"
                    :class="this.cv6 ? 'current_menu' : ''" @click="clickCurrentMenu('cv6')">
                    <i class="fa-solid fa-chevron-right"></i>
                    Nh???p ??i???m cho sinh vi??n
                </router-link>
            </div>
        </div>


        <div class="borderUnder hover_color" :class="this.isShowText == false ? 'justify_content_center' : ''"
            @click="handleClickSV('drop_down_sv')">
            <i class="fa-solid fa-user-tie"></i>
            <div v-if="this.isShowText">
                Sinh vi??n
            </div>
            <i class="fa-solid fa-angle-down iconRight" v-if="this.isShowText"></i>
        </div>

        <div class="drop_down_cvht dropDown" v-if="this.isShowDropDownSV">
            <div class="link_to hover_color">
                <router-link to="/sv/view" class="listSv_js hover_color" :class="this.sv1 ? 'current_menu' : ''" @click="() => {
                    clickCurrentMenu('sv1')
                    clickViewSv('listSv_js')
                }">
                    <i class="fa-solid fa-chevron-right"></i>
                    Th??ng tin
                </router-link>
            </div>
            <div class="link_to hover_color">
                <router-link to="/sv/editsv" class="addnew_js hover_color" :class="this.sv2 ? 'current_menu' : ''"
                    @click="() => {
                        clickCurrentMenu('sv2')
                        clickUpdateSv('listSv_js')
                    }">
                    <i class="fa-solid fa-chevron-right"></i>
                    C???p nh???t th??ng tin
                </router-link>
            </div>
            <div class="link_to hover_color">
                <router-link to="/sv/capnhatdiem" class="addnew_js hover_color" :class="this.sv3 ? 'current_menu' : ''"
                    @click="() => {
                        clickCurrentMenu('sv3')
                        xemDiemSV()
                        clickUpdateSv('listSv_js')
                    }">
                    <i class="fa-solid fa-chevron-right"></i>
                    Xem ??i???m h???c K??
                </router-link>
            </div>
            <div class="link_to hover_color">
                <router-link to="/sv/capnhathoatdong" class="addnew_js hover_color"
                    :class="this.sv4 ? 'current_menu' : ''" @click="() => {
                        clickCurrentMenu('sv4')
                        xemDiemSV()
                        clickUpdateSv('listSv_js')
                    }">
                    <i class="fa-solid fa-chevron-right"></i>
                    Ho???t ?????ng ngo???i kh??a
                </router-link>
            </div>
        </div>
        <router-link to="/announce" class="borderUnder underline_node hover_color" @click="clickCurrentMenu('thongbao')"
            :class="this.isShowText == false ? 'justify_content_center' : ''">
            <i class="fa-solid fa-bullhorn"></i>
            <div v-if="this.isShowText" :class="this.thongbao ? 'current_menu' : ''">
                Th??ng b??o
            </div>
        </router-link>

        <div class="borderUnder hover_color" :class="this.isShowText == false ? 'justify_content_center' : ''"
            @click="handleClickAccount('drop_down_account')">
            <i class="fa-solid fa-gear"></i>
            <div v-if="this.isShowText">
                T??i kho???n
            </div>
            <i class="fa-solid fa-angle-down iconRight" v-if="this.isShowText"></i>
        </div>

        <div class="drop_down_cvht dropDown" v-if="this.isShowDropDownAccount">
            <div class="link_to">
                <div class="listSv_js hover_color" @click="changePassword()">
                    <i class="fa-solid fa-chevron-right"></i>
                    ?????i m???t kh???u
                </div>
            </div>
            <div class="link_to">
                <div class="addnew_js hover_color" @click="logOut()">
                    <i class="fa-solid fa-chevron-right"></i>
                    ????ng xu???t
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.current_menu {
    color: #fdc500 !important;
}

.nav_back {
    width: 250px;
}

.closeNav {
    text-align: center;
    animation: closeNav 0.3s linear forwards;
}

.openNav {
    text-align: center;
    animation: openNav 0.3s linear forwards;
}

@keyframes closeNav {
    from {
        width: 250px;
    }

    to {
        width: 50px;
    }
}

@keyframes openNav {
    from {
        width: 50px;
    }

    to {
        width: 250px;
    }
}

#Menu {


    .underline_node {
        text-decoration: none;
    }

    width: 250px;
    background-color: #042954;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;

    .hover_color {
        cursor: pointer;

        &:hover {
            color: #fdc500 !important;
        }
    }

    .centerText {
        // display: flex;
        // align-items: center;
        // justify-content: center;
        height: 50px;
        width: 100%;
        background-color: #fdc500;
        color: #fff;
        align-items: center;
        padding: 0 10px;
        font-size: 25px;

        &:hover {
            background-color: rgb(227, 202, 8);
        }
    }

    &.closeMenu {
        animation: closeMenu 0.3s linear forwards;
    }

    &.openMenu {
        width: 100%;
        height: 100%;
        text-align: center;
        animation: openMenu 0.3s linear forwards;
    }


    .dropDown {
        padding: 10px 0 10px 20px;
        align-items: center;
        border-bottom: 1px solid #ccc;
        background-color: #042954;
        color: #fff;
        // font-size: 15px;

        .link_to {
            padding: 5px;

            a {
                text-decoration: none;
                color: #fff;
            }
        }

        i {
            padding: 5px;
            font-size: 10px;
            color: #fdc500;
        }

    }

    .borderUnder {
        cursor: pointer;
        height: 40px;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #ccc;
        background-color: #042954;
        color: #fff;
        position: relative;

        i {
            padding: 10px;
            color: #fdc500;
        }

        a {
            color: #fff;
            text-decoration: none;
        }

        .iconRight {
            position: absolute;
            right: 10px;
        }
    }

    .justify_content_center {
        justify-content: center;
    }

    .head {
        height: 50px;
        background-color: #fdc500;
        display: flex;
        color: #fff;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;
        font-size: 25px;

        .right {
            padding: 8px;
            cursor: pointer;

            .openMenu {
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 5px 8px;

                &:hover {
                    background-color: #ccc;
                }
            }

            .closeMenu {
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 5px 8px;

                &:hover {
                    background-color: #ccc;
                }
            }
        }
    }

    @keyframes closeMenu {
        from {
            width: 250px;
        }

        to {
            width: 50px;
        }
    }

    @keyframes openMenu {
        from {
            width: 50px;
            opacity: 0;
        }

        to {
            width: 250px;
            opacity: 1;
        }
    }

}
</style>