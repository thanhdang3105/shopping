import html from '../core/core.js'
import { connect } from '../core/store.js'

function body(init) {
    return html`
    <div class="row">
    <div class="body_heading">
        <div class="filter_category">
            <label for="category">Lọc: </label>
            <select name="category" id="category">
                    <option value="Best_seller">Bán chạy nhất</option>
                    <option value="Newest">Mới nhất</option>
                    <option value="Price_down">Giá giảm dần</option>
                    <option value="Price_up">Giá tăng dần</option>
            </select>
        </div>
        <h1 class="body_heading-title">Tất cả sản phẩm</h1>
        <p class="body_heading-productNumber">
            <span class="product">24</span>/<span class="All_product">100</span>
        </p>
    </div>
    <div class="body_product">
        <a href="" class="column2">
            <div class="img_product">
                <img src="./asset/img/vans.jpg" alt="product1" class="product_img">
            <img src="./asset/img/vans.jpg" alt="product1" class="product_img2">
            </div>
            <div class="info_product">
                <h2 class="product_name">Vans Basic</h2>
                <p class="collection_name">Logo các thương hiệu</p>
            </div>
        </a>
        <a href="" class="column2">
            <div class="img_product">
                <img src="./asset/img/puma.jpg" alt="product1" class="product_img">
            <img src="./asset/img/puma.jpg" alt="product1" class="product_img2">
            </div>
            <div class="info_product">
                <h2 class="product_name">Vans Basic</h2>
                <p class="collection_name">Logo các thương hiệu</p>
            </div>
        </a>
        <a href="" class="column2">
            <div class="img_product">
                <img src="./asset/img/champion.jpg" alt="product1" class="product_img">
            <img src="./asset/img/champion.jpg" alt="product1" class="product_img2">
            </div>
            <div class="info_product">
                <h2 class="product_name">Vans Basic</h2>
                <p class="collection_name">Logo các thương hiệu</p>
            </div>
        </a>
        <a href="" class="column2">
            <div class="img_product">
                <img src="./asset/img/logo-thuong-hieu-bape-elle-man-2.png" alt="product1" class="product_img">
            <img src="./asset/img/logo-thuong-hieu-bape-elle-man-2.png" alt="product1" class="product_img2">
            </div>
            <div class="info_product">
                <h2 class="product_name">Vans Basic</h2>
                <p class="collection_name">Logo các thương hiệu</p>
            </div>
        </a>
        <a href="" class="column2">
            <div class="img_product">
                <img src="./asset/img/NY.jpg" alt="product1" class="product_img">
            <img src="./asset/img/NY.jpg" alt="product1" class="product_img2">
            </div>
            <div class="info_product">
                <h2 class="product_name">Vans Basic</h2>
                <p class="collection_name">Logo các thương hiệu</p>
            </div>
        </a>
        <a href="" class="column2">
            <div class="img_product">
                <img src="./asset/img/vans.jpg" alt="product1" class="product_img">
            <img src="./asset/img/vans.jpg" alt="product1" class="product_img2">
            </div>
            <div class="info_product">
                <h2 class="product_name">Vans Basic</h2>
                <p class="collection_name">Logo các thương hiệu</p>
            </div>
        </a>
        <a href="" class="column2">
            <div class="img_product">
                <img src="./asset/img/puma.jpg" alt="product1" class="product_img">
            <img src="./asset/img/puma.jpg" alt="product1" class="product_img2">
            </div>
            <div class="info_product">
                <h2 class="product_name">Vans Basic</h2>
                <p class="collection_name">Logo các thương hiệu</p>
            </div>
        </a>
        <a href="" class="column2">
            <div class="img_product">
                <img src="./asset/img/champion.jpg" alt="product1" class="product_img">
            <img src="./asset/img/champion.jpg" alt="product1" class="product_img2">
            </div>
            <div class="info_product">
                <h2 class="product_name">Vans Basic</h2>
                <p class="collection_name">Logo các thương hiệu</p>
            </div>
        </a>
        <a href="" class="column2">
            <div class="img_product">
                <img src="./asset/img/logo-thuong-hieu-bape-elle-man-2.png" alt="product1" class="product_img">
            <img src="./asset/img/logo-thuong-hieu-bape-elle-man-2.png" alt="product1" class="product_img2">
            </div>
            <div class="info_product">
                <h2 class="product_name">Vans Basic</h2>
                <p class="collection_name">Logo các thương hiệu</p>
            </div>
        </a>
        <a href="" class="column2">
            <div class="img_product">
                <img src="./asset/img/NY.jpg" alt="product1" class="product_img">
            <img src="./asset/img/NY.jpg" alt="product1" class="product_img2">
            </div>
            <div class="info_product">
                <h2 class="product_name">Vans Basic</h2>
                <p class="collection_name">Logo các thương hiệu</p>
            </div>
        </a>
        <a href="" class="column2">
            <div class="img_product">
                <img src="./asset/img/vans.jpg" alt="product1" class="product_img">
            <img src="./asset/img/vans.jpg" alt="product1" class="product_img2">
            </div>
            <div class="info_product">
                <h2 class="product_name">Vans Basic</h2>
                <p class="collection_name">Logo các thương hiệu</p>
            </div>
        </a>
        <a href="" class="column2">
            <div class="img_product">
                <img src="./asset/img/puma.jpg" alt="product1" class="product_img">
            <img src="./asset/img/puma.jpg" alt="product1" class="product_img2">
            </div>
            <div class="info_product">
                <h2 class="product_name">Vans Basic</h2>
                <p class="collection_name">Logo các thương hiệu</p>
            </div>
        </a>
        <a href="" class="column2">
            <div class="img_product">
                <img src="./asset/img/champion.jpg" alt="product1" class="product_img">
            <img src="./asset/img/champion.jpg" alt="product1" class="product_img2">
            </div>
            <div class="info_product">
                <h2 class="product_name">Vans Basic</h2>
                <p class="collection_name">Logo các thương hiệu</p>
            </div>
        </a>
        <a href="" class="column2">
            <div class="img_product">
                <img src="./asset/img/logo-thuong-hieu-bape-elle-man-2.png" alt="product1" class="product_img">
            <img src="./asset/img/logo-thuong-hieu-bape-elle-man-2.png" alt="product1" class="product_img2">
            </div>
            <div class="info_product">
                <h2 class="product_name">Vans Basic</h2>
                <p class="collection_name">Logo các thương hiệu</p>
            </div>
        </a>
        <a href="" class="column2">
            <div class="img_product">
                <img src="./asset/img/NY.jpg" alt="product1" class="product_img">
            <img src="./asset/img/NY.jpg" alt="product1" class="product_img2">
            </div>
            <div class="info_product">
                <h2 class="product_name">Vans Basic</h2>
                <p class="collection_name">Logo các thương hiệu</p>
            </div>
        </a>
        <a href="" class="column2">
            <div class="img_product">
                <img src="./asset/img/vans.jpg" alt="product1" class="product_img">
            <img src="./asset/img/vans.jpg" alt="product1" class="product_img2">
            </div>
            <div class="info_product">
                <h2 class="product_name">Vans Basic</h2>
                <p class="collection_name">Logo các thương hiệu</p>
            </div>
        </a>
        <a href="" class="column2">
            <div class="img_product">
                <img src="./asset/img/puma.jpg" alt="product1" class="product_img">
            <img src="./asset/img/puma.jpg" alt="product1" class="product_img2">
            </div>
            <div class="info_product">
                <h2 class="product_name">Vans Basic</h2>
                <p class="collection_name">Logo các thương hiệu</p>
            </div>
        </a>
        <a href="" class="column2">
            <div class="img_product">
                <img src="./asset/img/champion.jpg" alt="product1" class="product_img">
            <img src="./asset/img/champion.jpg" alt="product1" class="product_img2">
            </div>
            <div class="info_product">
                <h2 class="product_name">Vans Basic</h2>
                <p class="collection_name">Logo các thương hiệu</p>
            </div>
        </a>
        <a href="" class="column2">
            <div class="img_product">
                <img src="./asset/img/logo-thuong-hieu-bape-elle-man-2.png" alt="product1" class="product_img">
            <img src="./asset/img/logo-thuong-hieu-bape-elle-man-2.png" alt="product1" class="product_img2">
            </div>
            <div class="info_product">
                <h2 class="product_name">Vans Basic</h2>
                <p class="collection_name">Logo các thương hiệu</p>
            </div>
        </a>
        <a href="" class="column2">
            <div class="img_product">
                <img src="./asset/img/NY.jpg" alt="product1" class="product_img">
            <img src="./asset/img/NY.jpg" alt="product1" class="product_img2">
            </div>
            <div class="info_product">
                <h2 class="product_name">Vans Basic</h2>
                <p class="collection_name">Logo các thương hiệu</p>
            </div>
        </a>
        <a href="" class="column2">
            <div class="img_product">
                <img src="./asset/img/vans.jpg" alt="product1" class="product_img">
            <img src="./asset/img/vans.jpg" alt="product1" class="product_img2">
            </div>
            <div class="info_product">
                <h2 class="product_name">Vans Basic</h2>
                <p class="collection_name">Logo các thương hiệu</p>
            </div>
        </a>
        <a href="" class="column2">
            <div class="img_product">
                <img src="./asset/img/puma.jpg" alt="product1" class="product_img">
            <img src="./asset/img/puma.jpg" alt="product1" class="product_img2">
            </div>
            <div class="info_product">
                <h2 class="product_name">Vans Basic</h2>
                <p class="collection_name">Logo các thương hiệu</p>
            </div>
        </a>
        <a href="" class="column2">
            <div class="img_product">
                <img src="./asset/img/champion.jpg" alt="product1" class="product_img">
            <img src="./asset/img/champion.jpg" alt="product1" class="product_img2">
            </div>
            <div class="info_product">
                <h2 class="product_name">Vans Basic</h2>
                <p class="collection_name">Logo các thương hiệu</p>
            </div>
        </a>
        <a href="" class="column2">
            <div class="img_product">
                <img src="./asset/img/logo-thuong-hieu-bape-elle-man-2.png" alt="product1" class="product_img">
            <img src="./asset/img/logo-thuong-hieu-bape-elle-man-2.png" alt="product1" class="product_img2">
            </div>
            <div class="info_product">
                <h2 class="product_name">Vans Basic loremasdaaa assssssssssssssssssssssssssss ssss sssssssssssssssssssss</h2>
                <p class="collection_name">Logo các thương hiệu</p>
            </div>
        </a>
    </div>
    <ul class="product_pagination">
        <a href="" class="number_pagination">1</a>
        <a href="" class="number_pagination">2</a>
        <a href="" class="number_pagination">3</a>
    </ul>
</div>
    `
}

export default connect()(body)