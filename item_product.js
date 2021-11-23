const $ = document.querySelector.bind(document)

    const desc = `<div class="more_desc" onclick="more_desc()">Xem thêm <i class="angle double down icon"></i></div>
    <div class="item_body-desc">
        <p class="item_body-desc--text">Nằm trong bộ sưu tập mới ra mắt, mẫu hình in Vans Basic nhanh chóng thu hút
            được nhiều bạn học sinh bởi kiểu dáng độc đáo, mới lạ.
            Tại Tiến Duy Lâu Goo, mẫu hình in này còn được in áo lớp với chất lượng cao giúp hình in sắc nét,
            chuẩn màu hứa hẹn sẽ trở thành hình in hot nhất 2021.</p>
        <img src="./asset/img/vans.jpg" alt="" class="item_body-desc--img">
        <ul class="item_body-desc--info">
            <h1 class="body_desc-info--heading">Thông tin chi tiết về mẫu hình in Vans Basic:</h1>
            <li class="body_desc-info--item">Xuất xứ: Tiến Duy Lâu Goo</li>
            <li class="body_desc-info--item">Hình in: Logo Vans kết hợp hoa văn</li>
            <li class="body_desc-info--item">Đặc điểm: Logo vừa mang thiên hướng cổ điển mà vẫn xen chút
                hiện đại</li>
            <li class="body_desc-info--item">Chất liệu in: Theo yêu cầu khách hàng, in chuyển nhiệt, in
                dẻo,...</li>
        </ul>
        <div class="body_desc-commit">
            <h1 class="body_desc-commit--heading">Cam kết của Tiến Duy khi may áo đồng phục với hình in
                Vans Basic:</h1>
            <p class="body_desc-commit--text">
                Tiến Duy Lâu Goo hiểu rằng áo đồng phục lớp là phương tiện để các bạn học sinh có thể
                thỏa sức sáng tạo
                và thể hiện cá tính, phong cách của mình trước toàn trường. Bởi vậy chúng tôi không
                ngừng cải thiện và nâng cao chất lượng của từng chi tiết cấu thành nên chiếc áo đồng
                phục lớp sao cho đáp
                ứng đầy đủ nhu cầu của tất cả các bạn học sinh trên toàn quốc.
                <br>
                <br>
                Trong đó, xu hướng in hình trên á đồng phục đang ngày càng được quan tâm mạnh mẽ và trở
                thành một trong những yếu tố bắt buộc phải có để
                chiếc áo lớp trở nên hoàn hảo hơn. Do đó,Tiến Duy Lâu Goo luôn sáng tạo để thiết kế ra
                nhiều mẫu hình in khác nhau cho các bạn lựa chọn và
                đem đến những trải nghiệm hài lòng nhất khi may đồng phục áo lợp tại Tiến Duy Lâu Goo.
            </p>
            <ul class="body_desc-commit--list">
                <li class="body_desc-commit--item">Tiến Duy Lâu Goo cam kết:</li>
                <li class="body_desc-commit--item">+ Làm việc chuyên nghiệp, nhanh chóng, đúng chuẩn</li>
                <li class="body_desc-commit--item">+ Chất lượng mẫu áo lớp, hình in luôn đảm bảo tốt nhất, theo yêu cầu của các bạn lớp mình</li>
                <li class="body_desc-commit--item">+ Kiểu dáng đa dạng, phong phú và được thiết kế độc quyền tại Hải Anh</li>
                <li class="body_desc-commit--item">+ Giao hàng nhanh chóng</li>
                <li class="body_desc-commit--item">+ Có nhiều ưu đãi, khuyến mại dành riêng cho các bạn học sinh khi may áo đồng phục lớp</li>
            </ul>
            <ul class="body_desc-contact--list">
                <h1 class="body_desc-contact--heading">MỌI THẮC MẮC XIN VUI LÒNG LIÊN HỆ:</h1>
                <li class="body_desc-contact--item">Tiến Duy Lâu Goo</li>
                <li class="body_desc-contact--item">Địa chỉ: Tát là,Huyện Cao Lộc,TP.Lạng Sơn</li>
                <li class="body_desc-contact--item">Hotline: 0852407686</li>
                <li class="body_desc-contact--item">Email: Thanhls1235ls12@gmail.com</li>
                <li class="body_desc-contact--item">Nguồn: <a href="https://TienDuyLauGoo.com/" class="desc_contact-item--link">https://TienDuyLauGoo.com/</a></li>
            </ul>
        </div>
    </div>`

    const cmt = `<div class="item_body-rate">
    <h1 class="comments_heading">Đánh giá</h1>
<p class="no_comments">Chưa có sản phẩm nào</p>
<h1 class="form_comments-heading">Hãy là viết nhận xét của bạn về “Mẫu hình in Vans Basic”</h1>
<form action="" method="post" class="send_comments">
    <div class="form_textarea">
        <label for="text_comments">Nhận xét của bạn *</label>
    <textarea name="text_comments" id="text_comments"></textarea>
    </div>
    <div class="form_input">
        <label for="name">Tên*</label>
        <input name="name" type="text" placeholder="Nhập tên của bạn" id="name" class="form_input-info">
        <label for="email">Mail*</label>
        <input name="email" type="text" placeholder="Nhập mail của bạn" id="email" class="form_input-info">
    </div>
    <button class="btn_send">Gửi</button>
</form>
</div>`

    if ($('.control_desc').classList.contains('active')) {
        $('.item_desc-rate--body').innerHTML = desc
    }
    function more_desc() {
        $('.item_body-desc').style.height = 'auto'
        $('.more_desc').style.display = 'none'
    }

    $('.control_desc').onclick = () => {
        $('.control_desc').classList.add('active')
        $('.control_rate').classList.remove('active')
        $('.item_desc-rate--body').innerHTML = desc
    }
    $('.control_rate').onclick = () => {
        $('.control_rate').classList.add('active')
        $('.control_desc').classList.remove('active')
        $('.item_desc-rate--body').innerHTML = cmt
    }

