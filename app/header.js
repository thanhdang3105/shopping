import html from '../core/core.js'
import { connect } from '../core/store.js'

function header(init) {
    return html`
    <div class="row">
                <ul class="header_nav">
                    <li class="header_nav-item menu_mobile"><i class="bars icon"></i>
                        <ul class="menu_mobile-list">
                            <li class="menu_mobile-item">
                                <a href="index.html" class="mobile_nav-link">Trang chủ</a>
                            </li>
                            <li class="menu_mobile-item">
                                <a href="product.html" class="mobile_nav-link">Sản phẩm</a>
                                <i class="angle down icon click_list"></i>
                                <ul class="mobile_link-list">
                                    <li class="link_list-item"><a href="#" class="link_list-itemLink">Logo độc quyền</a>
                                    </li>
                                    <li class="link_list-item"><a href="#" class="link_list-itemLink">Logo 12 con
                                            giáp</a></li>
                                    <li class="link_list-item"><a href="#" class="link_list-itemLink">Logo các cung
                                            hoàng đạo</a></li>
                                    <li class="link_list-item"><a href="#" class="link_list-itemLink">Logo của các
                                            thương hiệu</a></li>
                                </ul>
                            </li>
                            <li class="menu_mobile-item">
                                <a href="#" class="mobile_nav-link">Liên hệ</a>
                            </li>
                            <li class="menu_mobile-item">
                                <a class="mobile_search"><i id="search" class="search icon"></i></a>
                                <input type="text" class="mobile nav_item-search" placeholder="Tìm kiếm...">
                            </li>
                        </ul>
                    </li>
                    <li class="header_nav-item"><a href="index.html"><img
                                src="./asset/img/logo-urban-monkey-local-brand-viet-nam-streetwear.png" alt="Logo"
                                class="nav_item-logo"></a>
                    </li>
                    <li class="header_nav-item header_main-nav">
                        <a href="index.html" class="item_nav-link">Trang chủ</a>
                        <div class="divitem_nav-link"><a href="product.html" class="item_nav-link">Sản phẩm<i
                                    class="angle down icon"></i></a>
                            <ul class="link_list">
                                <li class="link_list-item"><a href="#" class="link_list-itemLink">Logo độc quyền</a>
                                </li>
                                <li class="link_list-item"><a href="#" class="link_list-itemLink">Logo 12 con giáp</a>
                                </li>
                                <li class="link_list-item"><a href="#" class="link_list-itemLink">Logo các cung hoàng
                                        đạo</a></li>
                                <li class="link_list-item"><a href="#" class="link_list-itemLink">Logo của các thương
                                        hiệu</a></li>
                            </ul>
                        </div>
                        <a href="#" class="item_nav-link">Liên hệ</a>
                    </li>
                    <li class="header_nav-item">
                        <div class="nav_item-control">
                            <a class="search_click"><i id="search" class="search icon"></i></a>
                            <input type="text" class="nav_item-search search_pc" placeholder="Tìm kiếm...">
                            <div class="cart_main">
                                <a><i id="cart" class="cart icon"></i></a>
                                <ul class="cart_list">
                                    <h1 class="heading_cart-name">Giỏ Hàng</h1>
                                    <div class="list_cart-item">
                                        <li class="cart_item">
                                            <img src="./asset//img/champion.jpg" alt="" class="cart_item-img">
                                            <div class="cart_item-info">
                                                <h2 class="cart_item-name">Champion Basic</h2>
                                                <p class="cart_item-color">Đen</p>
                                                <div class="cart_item-price">
                                                    <a class="quantity"><i id="less" class="minus icon"></i><span
                                                            class="number">1</span><i id="up" class="plus icon"></i></a>
                                                    <p class="price">200.000Đ</p>
                                                </div>
                                            </div>
                                            <i class="times icon"></i>
                                        </li>
                                        <li class="cart_item">
                                            <img src="./asset//img/champion.jpg" alt="" class="cart_item-img">
                                            <div class="cart_item-info">
                                                <h2 class="cart_item-name">Champion Basic</h2>
                                                <p class="cart_item-color">Đen</p>
                                                <div class="cart_item-price">
                                                    <a class="quantity"><i id="less" class="minus icon"></i><span
                                                            class="number">1</span><i id="up" class="plus icon"></i></a>
                                                    <p class="price">200.000Đ</p>
                                                </div>
                                            </div>
                                            <i class="times icon"></i>
                                        </li>
                                        <li class="cart_item">
                                            <img src="./asset//img/champion.jpg" alt="" class="cart_item-img">
                                            <div class="cart_item-info">
                                                <h2 class="cart_item-name">Champion Basic</h2>
                                                <p class="cart_item-color">Đen</p>
                                                <div class="cart_item-price">
                                                    <a class="quantity"><i id="less" class="minus icon"></i><span
                                                            class="number">1</span><i id="up" class="plus icon"></i></a>
                                                    <p class="price">200.000Đ</p>
                                                </div>
                                            </div>
                                            <i class="times icon"></i>
                                        </li>
                                        <li class="cart_item">
                                            <img src="./asset//img/champion.jpg" alt="" class="cart_item-img">
                                            <div class="cart_item-info">
                                                <h2 class="cart_item-name">Champion Basic</h2>
                                                <p class="cart_item-color">Đen</p>
                                                <div class="cart_item-price">
                                                    <a class="quantity"><i id="less" class="minus icon"></i><span
                                                            class="number">1</span><i id="up" class="plus icon"></i></a>
                                                    <p class="price">200.000Đ</p>
                                                </div>
                                            </div>
                                            <i class="times icon"></i>
                                        </li>
                                        <li class="cart_item">
                                            <img src="./asset//img/champion.jpg" alt="" class="cart_item-img">
                                            <div class="cart_item-info">
                                                <h2 class="cart_item-name">Champion Basic</h2>
                                                <p class="cart_item-color">Đen</p>
                                                <div class="cart_item-price">
                                                    <a class="quantity"><i id="less" class="minus icon"></i><span
                                                            class="number">1</span><i id="up" class="plus icon"></i></a>
                                                    <p class="price">200.000Đ</p>
                                                </div>
                                            </div>
                                            <i class="times icon"></i>
                                        </li>
                                    </div>
                                    <div class="cart_payment">
                                        <div class="total_price">
                                            <h1 class="total">Thành tiền:</h1>
                                            <span class="total_price-number">10.000.000Đ</span>
                                        </div>
                                        <div class="payment_controls">
                                            <a href="cart_list.html" class="btn Cart_list">Giỏ hàng</a>
                                            <a href="payments.html" class=" btn payment">Thanh toán</a>
                                        </div>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
    `
}

export default connect()(header)