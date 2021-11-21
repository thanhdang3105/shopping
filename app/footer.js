import html from '../core/core.js'
import { connect } from '../core/store.js'

function footer (init) {
    return html`
    <div class="row">
    <div class="footer_contact">
        <div class="contact_us">
            <a href="#root"><img src="./asset/img/logo-urban-monkey-local-brand-viet-nam-streetwear.png" alt="logo" class="footer_logo"></a>
            <h1 class="name_company">Công ty TNHH MTV DuyToo</h1>
            <div class="contact">
                <h2 class="contact_width-network">Về chúng tôi</h2>
                <ul class="icon_network-list">
                    <li class="icon_network"><a class="icon_link" href="http://www.facebook.com"><i class="facebook icon"></i></a></li>
                    <li class="icon_network"><a class="icon_link" href="http://www.instagram.com"><i class="instagram icon"></i></a></li>
                    <li class="icon_network"><a class="icon_link" href="http://www.twitter.com"><i class="twitter icon"></i></a></li>
                    <li class="icon_network"><a class="icon_link" href="http://www.youtube.com"><i class="youtube icon"></i></a></li>
                </ul>
                <p class="mail_contact"><i class="mail icon"></i>Thanhls1235ls12@gmail.com</p>
                <p class="phone_contact"><i class="phone icon"></i>0852407686</p>
            </div>
            <div class="contact_ads">
                <p class="title_ads">Liên hệ hợp tác quảng cáo:</p>
                <p class="mail_contact"><i class="mail icon"></i>Thanh@gmail.com</p>
                <p class="phone_contact"><i class="phone icon"></i>0852407686</p>
            </div>
        </div>
        <div class="footer_menu">
            <div class="store_location">
                <div class="location">
                    <h1 class="title_location">Miền Bắc</h1>
                    <p class="address"><i class="map pin icon"></i>Tát là,Huyện Cao Lộc,TP.Lạng Sơn</p>
                    <p class="hotline"><i class="phone icon"></i>0852407686</p>
                </div>
                <div class="location">
                    <h1 class="title_location">Miền Trung</h1>
                    <p class="address"><i class="map pin icon"></i>Tát là,Huyện Cao Lộc,TP.Lạng Sơn</p>
                    <p class="hotline"><i class="phone icon"></i>0852407686</p>
                </div>
                <div class="location">
                    <h1 class="title_location">Miền Nam</h1>
                    <p class="address"><i class="map pin icon"></i>Tát là,Huyện Cao Lộc,TP.Lạng Sơn</p>
                    <p class="hotline"><i class="phone icon"></i>0852407686</p>
                </div>
            </div>
        </div>
        <div class="footer_info">
            <div class="policy">
                <ul class="policy_list">
                    <li class="policy_item"><a class="policy_item-link" href="#"><i
                                class="angle right icon"></i>Chính sách bảo mật</a></li>
                    <li class="policy_item"><a class="policy_item-link" href="#"><i
                                class="angle right icon"></i>Phương thức vận chuyển</a></li>
                    <li class="policy_item"><a class="policy_item-link" href="#"><i
                                class="angle right icon"></i>Chính sách đổi trả hàng</a></li>
                    <li class="policy_item"><a class="policy_item-link" href="#"><i
                                class="angle right icon"></i>Chính sách bảo mật thông tin</a></li>
                    <li class="policy_item"><a class="policy_item-link" href="#"><i
                                class="angle right icon"></i>Góp ý</a></li>
                </ul>
            </div>
            <div class="facebook">
                <img src="./asset/img/IMG_0985.JPG" alt="">
            </div>
            <div class="map">
                <img src="./asset/img/IMG_0986.JPG" alt="">
            </div>
        </div>
    </div>
</div>
<div class="copyright">
    <p class="name_author">©2021 Bản quyền thuộc về ThanhDang.</p>
</div>
    `
}

export default connect()(footer)