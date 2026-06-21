const questionsDB = {
  "1": [
    {
      "id": 1,
      "question": "Công nghệ phần mềm (software engineering) là:",
      "options": [
        "A. Việc sử dụng các phần mềm.",
        "B. Việc áp dụng các công cụ, các kỹ thuật một cách hệ thống trong việc phát triển các ứng dụng dựa trên máy tính.",
        "C. Việc cài đặt và sử dụng các phần mềm một cách có hiệu quả trên máy vi tính.",
        "D. Việc cài đặt và bảo trì các phần mềm một cách có hiệu quả trên máy vi tính."
      ],
      "answer": 1,
      "explanation": "Công nghệ phần mềm là việc áp dụng các phương pháp, công cụ và kỹ thuật một cách hệ thống, có kỷ luật và có thể định lượng được vào việc phát triển, vận hành và bảo trì phần mềm."
    },
    {
      "id": 2,
      "question": "Tầng nào trong một mô hình của công nghệ phần mềm liên quan đến việc cung cấp các phương tiện hỗ trợ tự động hay bán tự động cho các tầng quá trình và phương pháp (công nghệ):",
      "options": [
        "A. Tầng công cụ",
        "B. Tầng phương pháp",
        "C. Tầng mô hình",
        "D. Tầng quy trình"
      ],
      "answer": 0,
      "explanation": "Tầng công cụ (Tools) cung cấp các phương tiện hỗ trợ tự động hoặc bán tự động cho tầng quy trình và tầng phương pháp (thường được gọi là các công cụ CASE - Computer-Aided Software Engineering)."
    },
    {
      "id": 3,
      "question": "Các đặc tính phần mềm là tất cả các điểm chung cho mọi ứng dụng. Đặc tính nào không phải là đặc tính phần mềm?",
      "options": [
        "A. Dữ liệu",
        "B. Các tiến trình, các ràng buộc",
        "C. Các giao diện",
        "D. Thuật giải"
      ],
      "answer": 3,
      "explanation": "Các đặc tính chung của phần mềm thường được định nghĩa gồm: Dữ liệu (Data), Các tiến trình/Các ràng buộc (Processes/Constraints), và Các giao diện (Interfaces). Thuật giải (Algorithm) là thành phần logic bên trong chương trình chứ không phải là đặc tính cấp cao chung của phần mềm."
    },
    {
      "id": 4,
      "question": "Phần mềm nhúng (Embedded) là phần mềm:",
      "options": [
        "A. Có mã nguồn được cung cấp miễn phí. Việc sử dụng phải tuân theo giấy phép sử dụng kèm theo mã nguồn",
        "B. Cung cấp chức năng đặc biệt được dùng bởi cộng đồng lớn như phần mềm xử lý văn bản, bảng tính, đồ họa, multimedia, giải trí,…",
        "C. Các chương trình được viết, thiết kế, lập trình chuyên biệt cho các thiết bị số và hoạt động song song với các thiết bị đó",
        "D. Phục vụ cho các phần mềm khác"
      ],
      "answer": 2,
      "explanation": "Phần mềm nhúng là phần mềm được thiết kế và nạp sẵn vào bộ nhớ của các thiết bị phần cứng kỹ thuật số chuyên biệt, hoạt động đồng thời và điều khiển các thiết bị đó."
    },
    {
      "id": 5,
      "question": "Người thực hiện những chức năng của các nhà phân tích, các nhà thiết kế và các lập trình viên được gọi là?",
      "options": [
        "A. Kỹ sư phần mềm",
        "B. Lập trình viên",
        "C. Nhà quản lý",
        "D. Chuyên gia"
      ],
      "answer": 0,
      "explanation": "Kỹ sư phần mềm (Software Engineer) là người đóng vai trò toàn diện bao gồm phân tích yêu cầu, thiết kế kiến trúc/hệ thống, lập trình và kiểm thử."
    },
    {
      "id": 6,
      "question": "Người có kiến thức và kinh nghiệm rộng rãi trong nhiều lĩnh vực bao gồm phát triển ứng dụng, mạng, cơ sở dữ liệu và hệ điều hành,... là ai?",
      "options": [
        "A. Chuyên gia kỹ thuật",
        "B. Nhà lãnh đạo",
        "C. Nhà quản lý",
        "D. Người kiểm thử"
      ],
      "answer": 0,
      "explanation": "Chuyên gia kỹ thuật (Technical Specialist) là người sở hữu kiến thức chuyên sâu và rộng rãi về nhiều mảng kỹ thuật khác nhau như mạng, hệ điều hành, cơ sở dữ liệu, và phát triển ứng dụng."
    },
    {
      "id": 7,
      "question": "Những người tham gia trực tiếp vào việc phát triển và xây dựng ra các sản phẩm CNTT được gọi là:",
      "options": [
        "A. Nhà chuyên môn",
        "B. Quản trị hệ thống",
        "C. Nhà phát triển hệ thống",
        "D. Chuyên gia"
      ],
      "answer": 2,
      "explanation": "Nhà phát triển hệ thống (System Developer) là những người trực tiếp tham gia thiết kế, phát triển và xây dựng nên các sản phẩm công nghệ thông tin."
    },
    {
      "id": 8,
      "question": "Ngành Công nghệ phần mềm ra đời vào khoảng thời gian nào?",
      "options": [
        "A. Vào những năm 50 khi bắt đầu có những phần mềm đầu tiên ra đời",
        "B. Vào những năm 60 - 70 khi các phần mềm bộc lộ nhiều khuyết điểm",
        "C. Vào đầu thế kỷ 21 khi Công nghệ thông tin đã trở nên phổ biến trên toàn cầu.",
        "D. Vào những năm 80 khi mà phương pháp lập trình Hướng đối tượng ra đời"
      ],
      "answer": 1,
      "explanation": "Ngành Công nghệ phần mềm ra đời vào cuối những năm 1960 (hội nghị NATO năm 1968) khi xảy ra cuộc 'khủng hoảng phần mềm' (software crisis) trong những năm 1960-1970, khi các phần mềm bộc lộ nhiều khuyết điểm về chi phí, tiến độ và chất lượng."
    },
    {
      "id": 9,
      "question": "Đâu không phải là 1 trong 3 đối tượng nghiên cứu chính của ngành Công nghệ phần mềm?",
      "options": [
        "A. Quy trình Công nghệ phần mềm",
        "B. Phương pháp phát triển phần mềm",
        "C. Công cụ và môi trường phát triển phần mềm",
        "D. Nghiên cứu tính khả thi của các dự án phần mềm"
      ],
      "answer": 3,
      "explanation": "Ba đối tượng nghiên cứu chính của Công nghệ phần mềm là: Quy trình (Process), Phương pháp (Methods) và Công cụ (Tools). Nghiên cứu tính khả thi là một hoạt động thuộc quy trình, không phải là một đối tượng nghiên cứu cốt lõi riêng biệt."
    },
    {
      "id": 10,
      "question": "Tính chất nào không phải là tính sáng tạo của phần mềm:",
      "options": [
        "A. Sản phẩm được thiết kế và cài đặt đầu tiên.",
        "B. Sản phẩm được phục vụ cho những đặc thù riêng.",
        "C. Sản phẩm có những đặc điểm khác về mặt nguyên lý so với các sản phẩm hiện hành.",
        "D. Sản phẩm mang lại lợi nhuận cao cho nhất nhà sản xuất so với các sản phẩm trước đó"
      ],
      "answer": 3,
      "explanation": "Tính sáng tạo của phần mềm thể hiện ở việc thiết kế mới, giải quyết bài toán đặc thù hoặc có nguyên lý đột phá. Mang lại lợi nhuận cao nhất cho nhà sản xuất là chỉ số tài chính/kinh doanh, không phản ánh tính sáng tạo kỹ thuật của phần mềm."
    },
    {
      "id": 11,
      "question": "Tính khoa học của một sản phẩm phần mềm thể hiện qua các yếu tố nào ?",
      "options": [
        "A. Cấu trúc, nội dung, hình thức thao tác",
        "B. Cấu trúc, nội dung, thuật toán",
        "C. Cấu trúc, chương trình, nội dung",
        "D. Cấu trúc, nội dung, kiểm thử"
      ],
      "answer": 1,
      "explanation": "Tính khoa học của phần mềm được thể hiện thông qua cấu trúc dữ liệu khoa học, nội dung thông tin chính xác và thuật toán (thuật giải) xử lý tối ưu, hợp lý."
    },
    {
      "id": 12,
      "question": "Phần mềm thỏa mãn tính chất nào là phần mềm mà có những hỏng hóc xuất hiện khi chương trình gặp phải lỗi được chấp nhận.",
      "options": [
        "A. Tính theo dõi được.",
        "B. Tính dung thứ sai lầm.",
        "C. Tính liên tác.",
        "D. Tính súc tích."
      ],
      "answer": 1,
      "explanation": "Tính dung thứ sai lầm (Fault tolerance) đảm bảo phần mềm vẫn hoạt động và các hỏng hóc phát sinh khi chương trình gặp lỗi nằm ở mức chấp nhận được, không gây sụp đổ toàn bộ hệ thống."
    },
    {
      "id": 13,
      "question": "Một sản phẩm phần mềm có các tính chất sau là thỏa mãn tiêu chuẩn nào:\n- Có cơ chế ngăn ngừa việc thâm nhập bất hợp pháp vào phần mềm hay dữ liệu và ngăn ngừa việc phát sinh ra những đối tượng (dữ liệu, đơn thể...) sai quy cách hoặc mâu thuẫn với các đối tượng sẵn có.\n- Không gây ra nhập nhằng trong thao tác, đảm bảo nhất quán về cú pháp.",
      "options": [
        "A. Tính toàn vẹn",
        "B. Tính sáng tạo",
        "C. Tính an toàn",
        "D. Tính kiểm thử được"
      ],
      "answer": 0,
      "explanation": "Tính toàn vẹn (Integrity) của phần mềm bao gồm khả năng bảo vệ dữ liệu tránh truy cập trái phép, ngăn ngừa mâu thuẫn dữ liệu và bảo đảm sự nhất quán cú pháp, không gây nhập nhằng thao tác."
    },
    {
      "id": 14,
      "question": "Đối với nhà sản xuất, phần mềm có chất lượng là phần mềm thỏa mãn các tính chất?",
      "options": [
        "A. Tính dùng lại, Dễ bảo trì, Dễ triển khai và cài đặt cho khách hàng, Dễ mở rộng.",
        "B. Tính dùng lại, Tính tiện dụng, Dễ triển khai và cài đặt cho khách hàng, Dễ mở rộng.",
        "C. Tính dùng lại, Dễ bảo trì, Tính bảo mật, Dễ mở rộng.",
        "D. Tính dùng lại, Dễ bảo trì, Dễ triển khai và cài đặt cho khách hàng, Tính an toàn."
      ],
      "answer": 0,
      "explanation": "Dưới góc nhìn của nhà sản xuất, chất lượng phần mềm được đánh giá bằng các tiêu chí nội bộ nhằm giảm thiểu chi phí phát triển và vận hành lâu dài: Tính dùng lại (Reusability), Dễ bảo trì (Maintainability), Dễ triển khai/cài đặt (Installability), Dễ mở rộng (Extensibility)."
    },
    {
      "id": 15,
      "question": "Đối với nhà sản xuất, phần mềm thỏa mãn tính dùng lại là phần mềm:",
      "options": [
        "A. Phần mềm viết theo hướng đối tượng (bao gồm các thành phần độc lập) dễ dàng sử dụng lại cho phần mềm khác, dự án khác.",
        "B. Khi cần bảo trì dễ dàng biết được thành phần nào bảo trì và việc bảo trì không ảnh hưởng đến các thành phần khác.",
        "C. Dễ dàng cài đặt, chuyển đổi từ máy này sang máy khác.",
        "D. Dễ dàng phân tích thiết kế."
      ],
      "answer": 0,
      "explanation": "Tính dùng lại (Reusability) có nghĩa là các thành phần độc lập trong mã nguồn (được viết theo hướng đối tượng hoặc module hóa) có thể dễ dàng tái sử dụng trong các hệ thống hoặc dự án khác mà không cần viết lại."
    },
    {
      "id": 16,
      "question": "Việc lựa chọn mô hình phát triển phần mềm thích hợp ít phải quan tâm tới tiêu chí nào?",
      "options": [
        "A. Phạm vi của tổ chức.",
        "B. Loại sản phẩm được thực hiện.",
        "C. Kỹ năng của đội ngũ nhân viên.",
        "D. Giá cả của hợp đồng."
      ],
      "answer": 3,
      "explanation": "Việc chọn mô hình phát triển phần mềm (SDLC) phụ thuộc chủ yếu vào đặc điểm kỹ thuật: Loại sản phẩm, kỹ năng đội ngũ, phạm vi tổ chức. Giá cả hợp đồng là yếu tố thương mại, ít ảnh hưởng trực tiếp đến việc quyết định mô hình kỹ thuật (thác nước, xoắn ốc, hay linh hoạt)."
    },
    {
      "id": 17,
      "question": "Khẳng định nào sau đúng:",
      "options": [
        "A. Những mô hình phát triển phần mềm mới nhất có quá nhiều ưu điểm và dường như không thể tìm thấy bất cứ những tồn tại nào cho bất kỳ tổ chức cá nhân phát tiển phần mềm nào hiện nay.",
        "B. Những mô hình phát triển phần mềm cũ có quá nhiều nhược điểm và dường như không phù hợp với bất kỳ tổ chức cá nhân phát tiển phần mềm nào hiện nay.",
        "C. Mỗi phần mềm chỉ có thể sử dụng 1 mô hình phát triển phần nào đấy.",
        "D. Có thể kết hợp sử dụng nhiều mô hình phát triển phần mềm cùng lúc."
      ],
      "answer": 3,
      "explanation": "Trong thực tế phát triển phần mềm, không có mô hình nào là vạn năng. Việc kết hợp nhiều mô hình (hybrid models) trong các giai đoạn hoặc các dự án con khác nhau là hoàn toàn khả thi và phổ biến."
    },
    {
      "id": 18,
      "question": "Mô hình phát triển phần mềm nào mà một giai đoạn tiếp theo được phát triển chỉ khi giai đoạn trước đó đã được hoàn tất ?",
      "options": [
        "A. Mô hình tuyến tính (The linear sequential model)",
        "B. Mô hình mẫu (Prototyping model)",
        "C. Mô hình xoắn ốc (The spiral model)",
        "D. Mô hình phần mềm"
      ],
      "answer": 0,
      "explanation": "Mô hình tuyến tính tuần tự (The linear sequential model), còn gọi là mô hình thác nước (Waterfall), quy định các giai đoạn (xác định yêu cầu, thiết kế, cài đặt, kiểm thử, bảo trì) phải được thực hiện lần lượt và giai đoạn sau chỉ bắt đầu khi giai đoạn trước hoàn thành."
    },
    {
      "id": 19,
      "question": "Đâu không phải là tên mô hình phát triển phần mềm?",
      "options": [
        "A. Mô hình lặp và tăng dần",
        "B. Mô hình tiến hóa",
        "C. Mô hình ISO",
        "D. Mô hình CMMi"
      ],
      "answer": 2,
      "explanation": "ISO (International Organization for Standardization) là một tổ chức quốc tế chuyên ban hành các tiêu chuẩn chất lượng (ví dụ: tiêu chuẩn đánh giá chất lượng phần mềm ISO 9126), không phải là tên một mô hình phát triển phần mềm."
    },
    {
      "id": 20,
      "question": "Mô hình phát triển phần mềm nào có 4 mục tiêu sau:\n- Planning: Xác định mục tiêu, tương tác và ràng buộc.\n- Risk analysis: Phân tích các lựa chọn và các chỉ định/giải quyết rủi ro.\n- Engineering: Phát triển sản phẩm.\n- Customer evaluation: Đánh giá của khách hàng.",
      "options": [
        "A. Mô hình xoắn ốc",
        "B. Mô hình tuyến tính",
        "C. Mô hình thác nước cổ điển",
        "D. Mô hình đài phun nước"
      ],
      "answer": 0,
      "explanation": "Mô hình xoắn ốc (Spiral Model) do Boehm đề xuất chia quy trình phát triển thành các chu kỳ, mỗi chu kỳ có 4 cung phần tư tương ứng với: Lập kế hoạch (Planning), Phân tích rủi ro (Risk Analysis), Thực hiện phát triển (Engineering), và Đánh giá từ khách hàng (Customer Evaluation)."
    },
    {
      "id": 21,
      "question": "Trong mô hình thác nước cổ điển, kết quả chuyển giao sau bước nào là mô hình xử lý, mô hình dữ liệu và các mô hình khác của phần mềm?",
      "options": [
        "A. Xác định yêu cầu",
        "B. Phân tích",
        "C. Thiết kế",
        "D. Cài đặt"
      ],
      "answer": 1,
      "explanation": "Giai đoạn Phân tích (Analysis) trong mô hình thác nước có nhiệm vụ làm rõ các yêu cầu logic của hệ thống, cho kết quả đầu ra là các mô hình logic như mô hình xử lý (luồng dữ liệu), mô hình dữ liệu (ERD), v.v. Các mô hình này sau đó làm đầu vào cho giai đoạn Thiết kế vật lý."
    },
    {
      "id": 22,
      "question": "Mô hình nào đưa ra hình ảnh hệ thống trong đầu của người dùng cuối:",
      "options": [
        "A. Mô hình thiết kế",
        "B. Mô hình người dùng",
        "C. Hình ảnh hệ thống",
        "D. Mô hình nhận thức hệ thống"
      ],
      "answer": 3,
      "explanation": "Mô hình nhận thức hệ thống (Mental Model) đại diện cho hình dung, niềm tin và cách hệ thống hoạt động được hình thành trong đầu của người dùng cuối thông qua trải nghiệm tương tác với hệ thống."
    },
    {
      "id": 23,
      "question": "Các mô tả yêu cầu phần mềm:",
      "options": [
        "A. Sẽ là cơ sở để cài đặt phần mềm",
        "B. Sẽ là cơ sở để bảo trì phần mềm",
        "C. Sẽ là cơ sở để tính toán giá trị của sản phẩm",
        "D. Sẽ là cơ sở để nghiệm thu, đánh giá phần mềm khi được chuyển giao"
      ],
      "answer": 3,
      "explanation": "Mô tả yêu cầu phần mềm (SRS) được xem là căn cứ pháp lý để nghiệm thu, đánh giá chất lượng sản phẩm xem có đạt yêu cầu thỏa thuận ban đầu giữa khách hàng và nhà phát triển hay không."
    },
    {
      "id": 24,
      "question": "Phát biểu nào sau đây không thể hiện quy tắc vàng \"Giảm thiểu việc ghi nhớ của người dùng\"?",
      "options": [
        "A. Nên tạo các mặc định thích hợp",
        "B. Nên tạo các phím gõ tắt trực giác, dễ nhớ",
        "C. Nên sắp xếp các giao diện gần gũi với thế giới thực",
        "D. Người dùng được phép \\\"undo\\\" thao tác sai"
      ],
      "answer": 3,
      "explanation": "Việc cho phép người dùng 'undo' (hoàn tác) thao tác sai thuộc về quy tắc vàng 'Cho phép dễ dàng đảo ngược các hành động' (Permit easy reversal of actions) chứ không trực tiếp thể hiện quy tắc giảm thiểu ghi nhớ ngắn hạn (Reduce short-term memory load)."
    },
    {
      "id": 25,
      "question": "Trong phân tích yêu cầu phần mềm yếu tố nào không cần xét đến.",
      "options": [
        "A. Khả thi về kinh tế",
        "B. Khả thi về kỹ thuật",
        "C. Khả thi về hợp pháp",
        "D. Khả thi về nghệ thuật"
      ],
      "answer": 3,
      "explanation": "Khi phân tích khả thi của dự án phần mềm, người ta đánh giá tính khả thi về kỹ thuật (Technical), kinh tế (Economic), pháp lý/hợp pháp (Legal) và vận hành (Operational). Tính khả thi về nghệ thuật không nằm trong các yếu tố kỹ nghệ tiêu chuẩn cần xét đến."
    },
    {
      "id": 26,
      "question": "\"Xác định yêu cầu chức năng\", nghĩa là:",
      "options": [
        "A. Đặc tả trừu tượng các ràng buộc mà hệ thống phải tuân theo.",
        "B. Đặc tả các yêu cầu của người dùng.",
        "C. Đặc tả trừu tượng các dịch vụ mà hệ thống phải cung cấp.",
        "D. Đặc tả trừu tượng các nhu cầu của người dùng mà hệ thống phải cung cấp."
      ],
      "answer": 2,
      "explanation": "Yêu cầu chức năng (Functional requirements) mô tả các dịch vụ hoặc chức năng cụ thể mà hệ thống phần mềm phải thực hiện và cung cấp cho người dùng."
    },
    {
      "id": 27,
      "question": "Tài liệu yêu cầu mà nó là một khẳng định, bằng ngôn ngữ tự nhiên hơn là các sơ đồ, về các dịch vụ hệ thống cần cung cấp và các ràng buộc mà hệ thống phải tuân theo là loại tài liệu nào?",
      "options": [
        "A. Tài liệu xác định yêu cầu",
        "B. Tài liệu đặc tả yêu cầu",
        "C. Tài liệu đặc tả phần mềm",
        "D. Không có loại tài liệu nào"
      ],
      "answer": 0,
      "explanation": "Tài liệu xác định yêu cầu (Requirements Definition) là bản mô tả trừu tượng về dịch vụ và ràng buộc hệ thống bằng ngôn ngữ tự nhiên để khách hàng có thể đọc và hiểu được, không chứa sơ đồ kỹ thuật phức tạp."
    },
    {
      "id": 28,
      "question": "Tiêu chuẩn đánh giá chất lượng của một thiết kế kiến trúc phải dựa vào :",
      "options": [
        "A. Tính truy cập và tính tin cậy của hệ thống",
        "B. Dữ liệu và điều khiển của hệ thống",
        "C. Tính chức năng của hệ thống",
        "D. Những chi tiết thực thi của hệ thống"
      ],
      "answer": 1,
      "explanation": "Kiến trúc hệ thống định hình cấu trúc dữ liệu và cơ chế điều khiển luồng thông tin của toàn bộ hệ thống. Do đó dữ liệu và điều khiển là tiêu chuẩn nền tảng để đánh giá chất lượng của thiết kế kiến trúc."
    },
    {
      "id": 29,
      "question": "Trong phương pháp phân tích kiến trúc, mô tả mẫu kiến trúc không dùng khung nhìn nào?",
      "options": [
        "A. Dòng dữ liệu",
        "B. Module",
        "C. Tiến trình",
        "D. Đặc tính"
      ],
      "answer": 3,
      "explanation": "Trong phương pháp phân tích kiến trúc, người ta sử dụng các khung nhìn như Module, Tiến trình, Dòng dữ liệu, v.v. để mô tả kiến trúc. Đặc tính (Quality attributes) là mục tiêu chất lượng cần đáp ứng, không phải là khung nhìn kiến trúc."
    },
    {
      "id": 30,
      "question": "Công việc nào sau đây cần làm trước khi phân tích yêu cầu phần mềm.",
      "options": [
        "A. Lập trình",
        "B. Kiểm thử",
        "C. Sao lưu dữ liệu",
        "D. Thu thập yêu cầu"
      ],
      "answer": 3,
      "explanation": "Trước khi tiến hành phân tích chi tiết yêu cầu phần mềm, kỹ sư phần mềm bắt buộc phải thực hiện công đoạn thu thập yêu cầu (Requirements Elicitation) từ các bên liên quan."
    },
    {
      "id": 31,
      "question": "Cách tốt nhất để đưa tới việc xem xét việc đánh giá yêu cầu là:",
      "options": [
        "A. Kiểm tra lỗi mô hình hệ thống",
        "B. Nhờ khách hàng kiểm tra yêu cầu",
        "C. Gửi họ tới đội thiết kế và xem họ có sự quan tâm nào không",
        "D. Dùng danh sách các câu hỏi kiểm tra để kiểm tra mỗi yêu cầu"
      ],
      "answer": 3,
      "explanation": "Sử dụng danh sách câu hỏi kiểm tra (Checklist) là một phương pháp hệ thống, bài bản và hiệu quả nhất để đánh giá và thẩm định chất lượng của từng yêu cầu phần mềm."
    },
    {
      "id": 32,
      "question": "Khả năng được chấp nhận trong các yêu cầu đối với phần mềm:",
      "options": [
        "A. Là tính tin cậy",
        "B. Là tính đúng",
        "C. Là sự chấp nhận được về giao diện",
        "D. Là sự phù hợp với yêu cầu người sử dụng"
      ],
      "answer": 3,
      "explanation": "Tính chấp nhận được (Acceptability) của phần mềm thể hiện ở việc phần mềm đó phải phù hợp với yêu cầu thực tế, thói quen và môi trường làm việc của người sử dụng."
    },
    {
      "id": 33,
      "question": "Khi xác định yêu cầu phần mềm, các yêu cầu cần được tìm hiểu còn chứa các mâu thuẫn nào:",
      "options": [
        "A. Thông tin còn nhập nhằng, đã đầy đủ chức năng.",
        "B. Dư thừa thông tin, đã đầy đủ chức năng.",
        "C. Đặc tả phần mềm, đặc tả yêu cầu, hệ thống lỗi.",
        "D. Thiếu rõ ràng, nhầm lẫn yêu cầu, trộn lẫn yêu cầu"
      ],
      "answer": 3,
      "explanation": "Khi thu thập và xác định yêu cầu ban đầu từ người dùng, thông tin thường gặp phải các mâu thuẫn như: Thiếu rõ ràng (ambiguity), nhầm lẫn yêu cầu (misunderstanding), và trộn lẫn yêu cầu chức năng với phi chức năng."
    },
    {
      "id": 34,
      "question": "Khi một công ty muốn ký một hợp đồng cho một dự án phát triển một phần mềm, công ty sẽ phát biểu các yêu cầu ở mức nào để không bắt buộc định nghĩa trước các giải pháp.",
      "options": [
        "A. Mức chi tiết",
        "B. Mức cụ thể",
        "C. Mức chuyên sâu",
        "D. Mức trừu tượng"
      ],
      "answer": 3,
      "explanation": "Để tránh áp đặt các giải pháp kỹ thuật cụ thể từ trước và để tạo điều kiện linh hoạt cho nhà phát triển đề xuất giải pháp tốt nhất, khách hàng nên phát biểu yêu cầu ở mức trừu tượng (abstract level)."
    },
    {
      "id": 35,
      "question": "Để đánh giá yêu cầu phần mềm, một số khía cạnh của yêu cầu cần kiểm chứng là:",
      "options": [
        "A. Giá trị, tính khoa học, tính đầy đủ, tính dễ dùng",
        "B. Giá trị, chắc chắn, tính an toàn, tính bảo mật",
        "C. Hoàn chỉnh, hiện thực, tiện lợi, tính an toàn",
        "D. Giá trị, chắc chắn, hoàn chỉnh, hiện thực, mẫu"
      ],
      "answer": 3,
      "explanation": "Các khía cạnh cần kiểm chứng khi thẩm định yêu cầu phần mềm bao gồm: Giá trị (Value), Chắc chắn (Unambiguous), Hoàn chỉnh (Complete), Hiện thực (Realizable), và khả năng tạo mẫu (Prototypable)."
    },
    {
      "id": 36,
      "question": "Một bổ sung cần thiết nhằm biến đổi hay ánh xạ giao dịch để tạo một thiết kế kiến trúc đầy đủ là:",
      "options": [
        "A. Sơ đồ quan hệ - thực thể",
        "B. Từ điển dữ liệu",
        "C. Mô tả việc xử lý cho mỗi module",
        "D. Những Test-case cho mỗi module"
      ],
      "answer": 2,
      "explanation": "Khi ánh xạ giao dịch (transaction mapping) từ sơ đồ luồng dữ liệu sang sơ đồ cấu trúc, cần bổ sung tài liệu mô tả chi tiết quy trình xử lý của từng module để kiến trúc được hoàn chỉnh và có khả năng lập trình."
    },
    {
      "id": 37,
      "question": "Những nguyên lý thiết kế giao diện nào không cho phép người dùng còn điều khiển tương tác với máy tính:",
      "options": [
        "A. Cho phép được gián đoạn",
        "B. Cho phép tương tác có thể undo",
        "C. Che dấu những bản chất kỹ thuật với những người dùng thường",
        "D. Chỉ cung cấp một cách thức xác định cứng khi hoàn thành tác vụ"
      ],
      "answer": 3,
      "explanation": "Nguyên tắc thiết kế giao diện tốt phải cung cấp tính linh hoạt cho người dùng. Việc chỉ cung cấp một cách duy nhất, cứng nhắc để hoàn thành tác vụ sẽ tước đi quyền kiểm soát và lựa chọn của người dùng."
    },
    {
      "id": 38,
      "question": "Tính nhất quán (consistency) giao diện ngầm định gồm:",
      "options": [
        "A. Những kỹ thuật input giữ tương tự suốt ứng dụng",
        "B. Mỗi ứng dụng phải có look and feel riêng biệt",
        "C. Cách thức điều hướng (navigational) nhạy với ngữ cảnh",
        "D. Những kỹ thuật input giữ tương tự suốt ứng dụng và mỗi ứng dụng phải có look and feel riêng biệt."
      ],
      "answer": 3,
      "explanation": "Tính nhất quán ngầm định của giao diện đòi hỏi các kỹ thuật nhập liệu phải tương tự nhau trong suốt ứng dụng, đồng thời mỗi ứng dụng phải có một giao diện trực quan (look and feel) đặc trưng và nhất quán."
    },
    {
      "id": 39,
      "question": "Khái niệm \"Đặc tả yêu cầu\", nghĩa là:",
      "options": [
        "A. \\\"Yêu cầu được viết bằng ngôn ngữ tự nhiên về các dịch cụ mà hệ thống phải cung cấp\\\".",
        "B. \\\"Yêu cầu được viết bằng ngôn ngữ chuyên ngành để mô tả chi tiết phần mềm\\\".",
        "C. \\\"Yêu cầu được đặc tả bởi các biểu đồ ngữ cảnh, đồ thị và lược đồ quan hệ,… \\\".",
        "D. \\\"Các dịch vụ được đặc tả một cách chi tiết, chính xác để có thể dùng làm cơ sở hợp đồng giữa hai bên.\\"
      ],
      "answer": 3,
      "explanation": "Đặc tả yêu cầu (Requirements Specification) là tài liệu kỹ thuật mô tả chính xác, chi tiết các chức năng và ràng buộc của hệ thống để làm căn cứ ký kết hợp đồng và nghiệm thu sản phẩm giữa hai bên."
    },
    {
      "id": 40,
      "question": "Đặc tả mà ở đó các từ ngữ, cú pháp, ngữ nghĩa được định nghĩa hình thức dựa vào toán học là:",
      "options": [
        "A. Đặc tả hình thức.",
        "B. Đặc tả phi hình thức.",
        "C. Đặc tả hình thức và đặc tả phi hình thức.",
        "D. Đặc tả sử dụng ngôn ngữ tự nhiên."
      ],
      "answer": 0,
      "explanation": "Đặc tả hình thức (Formal specification) là phương pháp đặc tả sử dụng các ký hiệu và mô hình toán học chặt chẽ để định nghĩa cú pháp và ngữ nghĩa một cách chính xác."
    },
    {
      "id": 41,
      "question": "Đâu không phải là thuận lợi của việc sử dụng đặc tả hình thức:",
      "options": [
        "A. Nhiều người biết và dễ diễn đạt",
        "B. Cho phép chúng ta thấy và hiểu được bản chất bên trong của các yêu cầu, đây là cách tốt nhất để làm giảm các lỗi, các thiếu sót có thể xảy ra và giúp cho công việc thiết kế được thuận lợi.",
        "C. Do chúng ta sử dụng toán học cho việc đặc tả nên có thể dựa vào các công cụ toán học khi phân tích và điều này làm tăng thêm tính chắc chắn và tính đầy đủ của hệ thống.",
        "D. Đặc tả hình thức, bản thân nó cho chúng ta một cách thức cho việc kiểm tra hệ thống sau này."
      ],
      "answer": 0,
      "explanation": "Đặc tả hình thức sử dụng toán học chuyên sâu nên rất kén người đọc và khó diễn đạt đối với khách hàng thông thường. Do đó, 'nhiều người biết và dễ diễn đạt' là sai, đây thực chất là nhược điểm lớn của đặc tả hình thức."
    },
    {
      "id": 42,
      "question": "Đâu không phải là đặc điểm của đặc tả phi hình thức?",
      "options": [
        "A. Đặc tả sử dụng ngôn ngữ tự nhiên",
        "B. Đặc tả được nhiều người biết",
        "C. Đặc tả chặt chẽ ít có hiểu lầm",
        "D. Đặc tả không chặt chẽ về ý nghĩa khoa học"
      ],
      "answer": 2,
      "explanation": "Đặc tả phi hình thức (Informal specification) sử dụng ngôn ngữ tự nhiên nên có tính mập mờ, thiếu chặt chẽ và dễ gây hiểu lầm. Khẳng định 'đặc tả chặt chẽ ít có hiểu lầm' không phải là đặc điểm của đặc tả phi hình thức."
    },
    {
      "id": 43,
      "question": "Để phát triển các hệ thống tương đối phức tạp có những hướng tiếp cận đặc tả hình thức nào?",
      "options": [
        "A. Tiếp cận đại số, hệ thống được mô tả dưới dạng các toán tử và các quan hệ.",
        "B. Tiếp cận mô hình, mô hình hệ thống được cấu trúc sử dụng các thực thể toán học như là các tập hợp và các thứ tự.",
        "C. Tiếp cận đại số, hệ thống được mô tả dưới dạng các toán tử, các quan hệ và tiếp cận mô hình, mô hình hệ thống được cấu trúc sử dụng các thực thể toán học như là các tập hợp, các thứ tự.",
        "D. Tiếp cận văn bản tự nhiên."
      ],
      "answer": 2,
      "explanation": "Hai hướng tiếp cận chính trong đặc tả hình thức đối với các hệ thống phức tạp là: Tiếp cận đại số (Algebraic - đặc tả bằng toán tử, quan hệ) và Tiếp cận dựa trên mô hình (Model-based - cấu trúc bằng thực thể toán học như tập hợp, thứ tự)."
    },
    {
      "id": 44,
      "question": "Trong khẳng định dưới đây đâu là nguyên lý đặc tả yêu cầu:",
      "options": [
        "A. Đặc tả hệ thống phải là một mô hình thiết kế",
        "B. Đặc tả hệ thống phải là một mô hình cài đặt",
        "C. Đặc tả hệ thống phải là một mô hình kết nối thiết bị",
        "D. Đặc tả hệ thống phải là một mô hình nhận thức"
      ],
      "answer": 3,
      "explanation": "Nguyên lý đặc tả yêu cầu quy định đặc tả hệ thống phải đóng vai trò là một mô hình nhận thức (cognitive model), phản ánh cách người dùng hiểu về thế giới thực chứ không phải mô hình thiết kế hay cài đặt kỹ thuật."
    },
    {
      "id": 45,
      "question": "Đâu không phải là nguyên lý đặc tả yêu cầu.",
      "options": [
        "A. Phân tách chức năng với cài đặt",
        "B. Cần tới ngôn ngữ đặc tả hệ thống hướng tiến trình",
        "C. Đặc tả phải bao gồm cả môi trường mà hệ thống vận hành",
        "D. Đặc tả hệ thống phải là một mô hình kết nối thiết bị."
      ],
      "answer": 3,
      "explanation": "Đặc tả hệ thống không được là mô hình kết nối thiết bị vật lý, mà phải tập trung vào hành vi chức năng và các ràng buộc logic của phần mềm trong môi trường vận hành."
    },
    {
      "id": 46,
      "question": "Khi đặc tả yêu cầu, người xây dựng hệ thống không cần quan tâm tới yêu cầu nào sau đây?",
      "options": [
        "A. Đầu ra của hệ thống là cái gì.",
        "B. Hệ thống sẽ phải làm cái gì để có kết quả mong muốn, nghĩa là phải xử lý những cái gì.",
        "C. Các phương án sẽ tiếp cận hệ thống để hoàn tất sản phẩm.",
        "D. Hệ thống sẽ phải có phải làm như thế nào để có kết quả mong muốn."
      ],
      "answer": 2,
      "explanation": "Khi đặc tả yêu cầu (Requirement Specification), nhà phát triển chỉ quan tâm đến hệ thống sẽ làm CÁI GÌ (What). Các phương án tiếp cận kỹ thuật chi tiết để hoàn thành sản phẩm (How) thuộc về giai đoạn thiết kế và cài đặt, không cần đưa vào đặc tả yêu cầu."
    },
    {
      "id": 47,
      "question": "Đâu không phải là yêu cầu cần được thỏa mãn của tài liệu yêu cầu phần mềm?",
      "options": [
        "A. Nó cần mô tả các hành vi hệ thống bên ngoài",
        "B. Nó cần mô tả các ràng buộc về thực hiện",
        "C. Nó phải là công cụ tham chiếu cho người bảo trì hệ thống",
        "D. Nó cần phải cố định không được thay đổi"
      ],
      "answer": 3,
      "explanation": "Yêu cầu phần mềm luôn có sự tiến hóa và thay đổi theo thời gian. Do đó, tài liệu yêu cầu phần mềm (SRS) không được cố định cứng nhắc mà phải có khả năng cập nhật và bảo trì."
    },
    {
      "id": 48,
      "question": "Thành phần nào không phải là của tài liệu yêu cầu phần mềm:\n1. Giới thiệu\n2. Thuật ngữ\n3. Mô hình hệ thống\n4. Định nghĩa yêu cầu chức năng\n5. Định nghĩa yêu cầu phi chức năng\n6. Tiến triển thực hiện từng giai đoạn\n7. Đặc tả yêu cầu",
      "options": [
        "A. 1 - 6",
        "B. 2 - 6",
        "C. 7",
        "D. 6"
      ],
      "answer": 3,
      "explanation": "Thành phần 'Tiến triển thực hiện từng giai đoạn' (mục 6) thuộc về kế hoạch quản lý dự án (Project Schedule/Plan), không thuộc nội dung của tài liệu đặc tả yêu cầu phần mềm (SRS)."
    },
    {
      "id": 49,
      "question": "Đâu không phải là khó khăn của đặc tả hình thức?",
      "options": [
        "A. Linh hoạt, mềm dẻo dẫn đến sự hiểu nhầm giữa hai bên.",
        "B. Khách hàng không thích đặc tả hình thức.",
        "C. Quản lý phần mềm có tính bảo thủ cố hữu của nó, không sẵn sàng chấp nhận các kỹ thuật mới.",
        "D. Chi phí cho việc đặc tả hình thức thường cao hơn so với các đặc tả khác."
      ],
      "answer": 0,
      "explanation": "Đặc tả hình thức sử dụng toán học nên có tính chặt chẽ, chính xác tuyệt đối và rất cứng nhắc, không hề 'linh hoạt, mềm dẻo dẫn đến hiểu nhầm'. Sự mập mờ, hiểu nhầm là nhược điểm của đặc tả phi hình thức."
    },
    {
      "id": 50,
      "question": "\"Tập hợp ba hoặc nhiều hơn một số người cho một thời hạn nhất định để thảo luận một số chủ đề\" là kỹ thuật thu thập dữ liệu nào?",
      "options": [
        "A. Phỏng vấn",
        "B. Họp nhóm",
        "C. Quan sát",
        "D. Xem xét tài liệu"
      ],
      "answer": 1,
      "explanation": "Họp nhóm (Focus groups / Group meetings) là kỹ thuật thu thập thông tin bằng cách tập hợp một nhóm người (từ 3 người trở lên) thảo luận tập trung về các chủ đề được định sẵn trong một khoảng thời gian cụ thể."
    },
    {
      "id": 51,
      "question": "\"Người thực hiện ngồi tại một chỗ và ghi chép các hoạt động, các bước xử lý công việc hoặc máy tính sẽ lưu giữ các chương trình thường trú, lưu lại vết của các chương trình được sử dụng, email và các hoạt động khác được xử lý bởi máy\" là kỹ thuật thu thập dữ liệu nào?",
      "options": [
        "A. Quan sát",
        "B. Phỏng vấn",
        "C. Xem xét tài liệu",
        "D. Ấn định công việc tạm thời"
      ],
      "answer": 0,
      "explanation": "Đây là kỹ thuật Quan sát (Observation), có thể là quan sát trực tiếp (ghi chép hành động của người dùng) hoặc quan sát gián tiếp qua hệ thống máy tính tự động ghi lại lịch sử thao tác."
    },
    {
      "id": 52,
      "question": "\"Đóng vai người sử dụng phần mềm và thực hiện các công việc chuyên môn trong một khoảng thời gian nhất định\" là kỹ thuật thu thập dữ liệu nào?",
      "options": [
        "A. Họp nhóm",
        "B. Ấn định công việc tạm thời",
        "C. Quan sát",
        "D. Phỏng vấn"
      ],
      "answer": 1,
      "explanation": "Ấn định công việc tạm thời (Temporary job assignment / Apprenticeship) là kỹ thuật mà kỹ sư phần mềm trực tiếp học việc, đóng vai và làm việc như một người dùng thực thụ để tự mình trải nghiệm các nghiệp vụ cần tin học hóa."
    },
    {
      "id": 53,
      "question": "Các câu hỏi sau: “Ông có thể nói cho tôi về...”, “Ông nghĩ thế nào về...”, “Ông có thể mô tả làm thế nào...” thuộc dạng câu hỏi nào của kỹ thuật phỏng vấn?",
      "options": [
        "A. Câu hỏi mở",
        "B. Câu hỏi đóng",
        "C. Câu hỏi dễ",
        "D. Câu hỏi khó"
      ],
      "answer": 0,
      "explanation": "Các câu hỏi này khuyến khích đối tượng được phỏng vấn tự do chia sẻ, giải thích rộng rãi các suy nghĩ, ý kiến cá nhân thay vì chỉ trả lời Có/Không hay chọn các phương án cố định, đó là câu hỏi mở (Open-ended questions)."
    },
    {
      "id": 54,
      "question": "Đâu không phải là ưu điểm của phỏng vấn có cấu trúc?",
      "options": [
        "A. Dễ quản lý và đánh giá",
        "B. Đánh giá được nhiều mục đích",
        "C. Không cần đào tạo nhiều",
        "D. Có khả năng mềm dẻo nhất"
      ],
      "answer": 3,
      "explanation": "Phỏng vấn có cấu trúc (Structured interview) đi theo một kịch bản câu hỏi định sẵn một cách chặt chẽ, vì vậy tính linh hoạt, mềm dẻo của nó rất thấp. 'Có khả năng mềm dẻo nhất' là đặc điểm của phỏng vấn không cấu trúc (Unstructured interview)."
    },
    {
      "id": 55,
      "question": "Đâu không phải là công việc thường được tiến hành cho cuộc phỏng vấn",
      "options": [
        "A. Tiến hành đặt cuộc hẹn phù hợp với thời gian của phỏng vấn",
        "B. Chuẩn bị tốt, tìm hiểu kỹ về người được phỏng vấn",
        "C. Có kế hoạch cho cuộc phỏng vấn",
        "D. Ghi chép các hoạt động, các bước xử lý công việc"
      ],
      "answer": 3,
      "explanation": "Công việc ghi chép các hoạt động và các bước xử lý công việc trực tiếp là thuộc về kỹ thuật Quan sát hoặc Nhật ký công việc, không phải là hoạt động chuẩn bị hay tiến hành của một cuộc phỏng vấn."
    },
    {
      "id": 56,
      "question": "Đâu không phải là nhược điểm của phương pháp phỏng vấn:",
      "options": [
        "A. Phỏng vấn và các dạng khác của thu thập dữ liệu có thể làm bạn lạc lối, thiếu chính xác, hoặc thông tin không liên quan, không thích hợp.",
        "B. Bạn cần học cách đọc ngôn ngữ cử chỉ và thói quen để quyết định được các điều cần thiết cho cùng một thông tin.",
        "C. Đòi hỏi kỹ năng",
        "D. Phỏng vấn không thích hợp cho việc nhận các thông tin cần đảm bảo cả số lượng lẫn chất lượng:"
      ],
      "answer": 2,
      "explanation": "Trong các nhược điểm được liệt kê, 'Đòi hỏi kỹ năng' là điều kiện/yêu cầu năng lực đối với người phỏng vấn để cuộc phỏng vấn có chất lượng tốt, không phải là khuyết điểm nội tại hay nhược điểm của phương pháp phỏng vấn."
    },
    {
      "id": 57,
      "question": "Đâu không là ưu điểm của phương pháp họp nhóm:",
      "options": [
        "A. Có thể tạo ra quyết định.",
        "B. Nhận được cả thông tin tổng hợp và chi tiết.",
        "C. Phương pháp tốt cho các yêu cầu bên ngoài .",
        "D. Kỹ sư phần mềm có thể tập trung vào vấn đề, mà không bị ảnh hưởng bởi người khác"
      ],
      "answer": 3,
      "explanation": "Họp nhóm tập hợp nhiều người thảo luận nên kỹ sư phần mềm thường xuyên bị xao nhãng hoặc chịu ảnh hưởng từ các ý kiến trái chiều khác nhau, do đó nói 'không bị ảnh hưởng bởi người khác' là sai."
    },
    {
      "id": 58,
      "question": "Tính hướng thời gian của dữ liệu đề cập tới gồm:",
      "options": [
        "A. Quá khứ và đòi hỏi tương lai",
        "B. Quá khứ, hiện tại và không đòi hỏi tương lai",
        "C. Hiện tại và đòi hỏi tương lai",
        "D. Quá khứ, hiện tại và đòi hỏi tương lai"
      ],
      "answer": 3,
      "explanation": "Tính hướng thời gian của dữ liệu khảo sát hệ thống đòi hỏi phải xem xét cả dữ liệu Quá khứ (lịch sử biến đổi), Hiện tại (quy trình đang chạy) và những Đòi hỏi của tương lai (yêu cầu phát triển sắp tới)."
    },
    {
      "id": 59,
      "question": "Nhược điểm nào không phải là của phỏng vấn có cấu trúc?",
      "options": [
        "A. Chi phí chuẩn bị lớn",
        "B. Tính cấu trúc có thể không thích hợp cho mọi tình huống",
        "C. Giảm tính chủ động của các người phỏng vấn",
        "D. Tốn thời gian lựa chọn và phân tích thông tin"
      ],
      "answer": 3,
      "explanation": "Phỏng vấn có cấu trúc thu thập thông tin theo form mẫu nhất quán nên việc lựa chọn, tổng hợp và phân tích dữ liệu rất nhanh chóng. Do đó, 'Tốn thời gian lựa chọn và phân tích thông tin' là nhược điểm của phỏng vấn không cấu trúc, không phải của phỏng vấn có cấu trúc."
    },
    {
      "id": 60,
      "question": "Tính cấu trúc của đặc tính dữ liệu:",
      "options": [
        "A. Đặc biệt quan trọng bởi vì thiếu nó ta có thể tạo ứng dụng sai",
        "B. Đặc biệt quan trọng bởi vì thiếu nó ta có thể xác định yêu cầu sai",
        "C. Đặc biệt quan trọng bởi vì thiếu nó ta có thể phân tích ứng dụng sai",
        "D. Đặc biệt quan trọng bởi vì thiếu nó ta có thể cài đặt ứng dụng sai ."
      ],
      "answer": 0,
      "explanation": "Đặc tính dữ liệu và cấu trúc của nó quyết định nền tảng cơ sở dữ liệu và xử lý của hệ thống. Nếu không xác định rõ tính cấu trúc này, việc xây dựng và cài đặt ứng dụng dễ bị sai lệch về bản chất dữ liệu, dẫn đến tạo ứng dụng sai."
    }
  ],
  "2": [
    {
      "id": 1,
      "question": "Quá trình xác định các chức năng và các ràng buộc của hệ thống gọi là tìm hiểu và xác định yêu cầu. Để có được điều này thì cần phải trả lời câu hỏi nào:",
      "options": [
        "\"cái gì-what\"",
        "\"như thế nào-how\"",
        "\"cái gì-what\" và \"như thế nào-how\"",
        "\"bao nhiêu-how many\""
      ],
      "answer": 0,
      "explanation": "Quá trình xác định yêu cầu tập trung trả lời câu hỏi 'cái gì' (What) hệ thống phải thực hiện, thay vì 'như thế nào' (How).."
    },
    {
      "id": 2,
      "question": "Khái niệm \"Định ra yêu cầu\", nghĩa là:",
      "options": [
        "\"Các dịch vụ được đặc tả bằng ngôn ngữ tự nhiên, có thể dùng làm cơ sở hợp đồng giữa hai bên.\"",
        "\"Yêu cầu được viết bằng ngôn ngữ chuyên ngành để mô tả chi tiết phần mềm.\"",
        "\"Yêu cầu được đặc tả bởi các biểu đồ ngữ cảnh, đồ thị và lược đồ quan hệ,… \"",
        "\"Yêu cầu được viết bằng ngôn ngữ tự nhiên về các dịch cụ mà hệ thống phải cung cấp.\""
      ],
      "answer": 3,
      "explanation": "Định ra yêu cầu (User Requirements) là những phát biểu bằng ngôn ngữ tự nhiên mô tả các dịch vụ mà hệ thống cung cấp.."
    },
    {
      "id": 3,
      "question": "Tài liệu yêu cầu mà nó là một khẳng định, bằng ngôn ngữ tự nhiên hơn là các sơ đồ, về các dịch vụ hệ thống cần cung cấp và các ràng buộc mà hệ thống phải tuân theo là loại tài liệu nào?",
      "options": [
        "Tài liệu xác định yêu cầu",
        "Tài liệu đặc tả yêu cầu",
        "Tài liệu đặc tả phần mềm",
        "Không có loại tài liệu nào"
      ],
      "answer": 1,
      "explanation": "Theo giáo trình: Đầu vào của giai đoạn phân tích yêu cầu bao gồm các tài liệu như: tài liệu đặc tả yêu cầu, tài liệu thiết kế hệ thống, tài liệu khách hàng yêu cầu về ..."
    },
    {
      "id": 4,
      "question": "Tài liệu yêu cầu mà nó là tài liệu được cấu trúc mô tả hệ thống các dịch vụ chi tiết hơn (đôi khi tài liệu này được gọi là đặc tả chức năng và có thể coi là hợp đồng ký kết giữa người mua và kẻ bán phần mềm) là loại tài liệu nào?",
      "options": [
        "Tài liệu xác định yêu cầu",
        "Tài liệu đặc tả yêu cầu",
        "Tài liệu đặc tả phần mềm",
        "Không có loại tài liệu nào"
      ],
      "answer": 1,
      "explanation": "Tài liệu đặc tả yêu cầu (Requirements Specification) mô tả chi tiết, có cấu trúc các chức năng và đóng vai trò như hợp đồng.."
    },
    {
      "id": 5,
      "question": "Tiêu chuẩn đánh giá chất lượng của một thiết kế kiến trúc phải dựa vào :",
      "options": [
        "Tính truy cập và tính tin cậy của hệ thống",
        "Dữ liệu và điều khiển của hệ thống",
        "Tính chức năng của hệ thống",
        "Những chi tiết thực thi của hệ thống"
      ],
      "answer": 1,
      "explanation": "Chất lượng thiết kế kiến trúc phần mềm phải dựa vào việc tổ chức dữ liệu và cấu trúc điều khiển của hệ thống.."
    },
    {
      "id": 6,
      "question": "Trong phương pháp phân tích kiến trúc, mô tả mẫu kiến trúc không dùng khung nhìn nào?",
      "options": [
        "Dòng dữ liệu",
        "Module",
        "Tiến trình",
        "Đặc tính"
      ],
      "answer": 1,
      "explanation": "Theo giáo trình: Trong một số sản phẩm ở thập kỷ 90, các nhà sản xuất sẽ cung cấp hỗ trợ kiểm tra trong các môi trường CASE của họ. Một cách lý tưởng, những hỗ trợ như..."
    },
    {
      "id": 7,
      "question": "Biểu đồ quan hệ thực thể:",
      "options": [
        "Đưa ra hình ảnh quan hệ giữa các đối tượng dữ liệu",
        "Đưa ra hình ảnh những chức năng biến đổi luồng dữ liệu",
        "Chỉ ra những quyết định logic chính khi chúng xuất hiện",
        "Chỉ ra sự tương tác của hệ thống với sự kiện bên ngoài"
      ],
      "answer": 0,
      "explanation": "Biểu đồ quan hệ thực thể (ERD) thể hiện cấu trúc và mối quan hệ giữa các đối tượng dữ liệu trong hệ thống.."
    },
    {
      "id": 8,
      "question": "Khả năng được chấp nhận trong các yêu cầu đối với phần mềm:",
      "options": [
        "Là tính tin cậy",
        "Là tính đúng",
        "Là sự chấp nhận được về giao diện",
        "Là sự phù hợp với yêu cầu người sử dụng"
      ],
      "answer": 3,
      "explanation": "Khả năng chấp nhận được của phần mềm thể hiện ở sự phù hợp tối đa với các yêu cầu thực tế của người sử dụng.."
    },
    {
      "id": 9,
      "question": "Khi một công ty muốn ký một hợp đồng cho một dự án phát triển một phần mềm, công ty sẽ phát biểu các yêu cầu ở mức nào để không bắt buộc định nghĩa trước các giải pháp.",
      "options": [
        "Mức chi tiết",
        "Mức cụ thể",
        "Mức chuyên sâu",
        "Mức trừu tượng"
      ],
      "answer": 3,
      "explanation": "Khi đấu thầu hoặc ký hợp đồng sơ bộ, yêu cầu được phát biểu ở mức trừu tượng để không áp đặt trước giải pháp kỹ thuật.."
    },
    {
      "id": 10,
      "question": "Để đánh giá yêu cầu phần mềm, một số khía cạnh của yêu cầu cần kiểm chứng là:",
      "options": [
        "Giá trị, tính khoa học, tính đầy đủ, tính dễ dùng",
        "Giá trị, chắc chắn, tính an toàn, tính bảo mật",
        "Hoàn chỉnh, hiện thực, tiện lợi, tính an toàn",
        "Giá trị, chắc chắn, hoàn chỉnh, hiện thực, mẫu"
      ],
      "answer": 3,
      "explanation": "Các khía cạnh cần thẩm định yêu cầu gồm: Giá trị (Value), Chắc chắn (Unambiguous), Hoàn chỉnh (Complete), Hiện thực (Realizable), Mẫu (Prototypable).."
    },
    {
      "id": 11,
      "question": "Một bổ sung cần thiết nhằm biến đổi hay ánh xạ giao dịch để tạo một thiết kế kiến trúc đầy đủ là:",
      "options": [
        "Sơ đồ quan hệ - thực thể",
        "Từ điển dữ liệu",
        "Mô tả việc xử lý cho mỗi module",
        "Những Test-case cho mỗi module"
      ],
      "answer": 1,
      "explanation": "Theo giáo trình: Một kho chứa là một từ điển dữ liệu hỗ trợ định nghĩa về các kiểu đối tượng khác nhau và quan hệ giữa các đối tượng đó. Các công cụ đồ hoạ hỗ trợ cho ..."
    },
    {
      "id": 12,
      "question": "Những nguyên lý thiết kế giao diện nào không cho phép người dùng còn điều khiển tương tác với máy tính:",
      "options": [
        "Cho phép được gián đoạn",
        "Cho phép tương tác có thể undo",
        "Che dấu những bản chất kỹ thuật với những người dùng thường",
        "Chỉ cung cấp một cách thức xác định cứng khi hoàn thành tác vụ"
      ],
      "answer": 3,
      "explanation": "Thiết kế giao diện tốt phải để người dùng kiểm soát."
    },
    {
      "id": 13,
      "question": "Tính nhất quán (consistency) giao diện ngầm định gồm:",
      "options": [
        "Những kỹ thuật input giữ tương tự suốt ứng dụng",
        "Mỗi ứng dụng phải có look and feel riêng biệt",
        "Cách thức điều hướng (navigational) nhạy với ngữ cảnh",
        "Những kỹ thuật input giữ tương tự suốt ứng dụng và mỗi ứng dụng phải có look and feel riêng biệt."
      ],
      "answer": 3,
      "explanation": "Tính nhất quán ngầm định yêu cầu kỹ thuật nhập tương tự và mỗi ứng dụng phải có diện mạo (look and feel) riêng biệt nhất quán.."
    },
    {
      "id": 14,
      "question": "Mô hình nào đưa ra hình ảnh hệ thống trong đầu của người dùng cuối:",
      "options": [
        "Mô hình thiết kế",
        "Mô hình người dùng",
        "Hình ảnh hệ thống",
        "Mô hình nhận thức hệ thống"
      ],
      "answer": 0,
      "explanation": "Theo giáo trình: Nguyên lý 5: Đặc tả hệ thống phải là một mô hình nhận thức: không phải là mô hình thiết kế hay cài đặt. Nó phải mô tả một hệ thống như cộng đồng người..."
    },
    {
      "id": 15,
      "question": "Kết quả của giai đoạn xác định yêu cầu phần mềm là:",
      "options": [
        "Phần mềm với độ tin cậy cao",
        "Sơ đồ luồng dữ liệu cho từng yêu cầu phần mềm",
        "Danh sách các yêu cầu phần mềm và Sơ đồ luồng dữ liệu cho từng yêu cầu phần mềm",
        "Code của chương trình"
      ],
      "answer": 2,
      "explanation": "Giai đoạn xác định yêu cầu kết thúc bằng danh sách yêu cầu chi tiết kèm theo các sơ đồ luồng dữ liệu (DFD) tương ứng.."
    },
    {
      "id": 16,
      "question": "Các mô tả yêu cầu phần mềm:",
      "options": [
        "Sẽ là cơ sở để cài đặt phần mềm",
        "Sẽ là cơ sở để bảo trì phần mềm",
        "Sẽ là cơ sở để tính toán giá trị của sản phẩm",
        "Sẽ là cơ sở để nghiệm thu, đánh giá phần mềm khi được chuyển giao"
      ],
      "answer": 3,
      "explanation": "Đặc tả yêu cầu phần mềm là căn cứ pháp lý để nghiệm thu, đánh giá xem sản phẩm có hoàn thành đúng cam kết khi chuyển giao hay không.."
    },
    {
      "id": 17,
      "question": "Phát biểu nào sau đây không thể hiện quy tắc vàng \"Giảm thiểu việc ghi nhớ của người dùng\"?",
      "options": [
        "Nên tạo các mặc định thích hợp",
        "Nên tạo các phím gõ tắt trực giác, dễ nhớ",
        "Nên sắp xếp các giao diện gần gũi với thế giới thực",
        "Người dùng được phép \"undo\" thao tác sai"
      ],
      "answer": 3,
      "explanation": "Cho phép người dùng 'undo' (hủy bước sai) thuộc nguyên tắc 'Cho phép người dùng kiểm soát', không phải 'Giảm thiểu ghi nhớ'.."
    },
    {
      "id": 18,
      "question": "Trong phân tích yêu cầu phần mềm yếu tố nào không cần xét đến.",
      "options": [
        "Khả thi về kinh tế",
        "Khả thi về kỹ thuật",
        "Khả thi về hợp pháp",
        "Khả thi về nghệ thuật"
      ],
      "answer": 0,
      "explanation": "Theo giáo trình: Khả thi về kinh tế: chi phí phát triển phải cân xứng với lợi ích mà hệ thống đem lại, gồm có:..."
    },
    {
      "id": 19,
      "question": "Người ta không dùng cách nào để đặc tả các yêu cầu?",
      "options": [
        "Ngôn ngữ tự nhiên có cấu trúc.",
        "Ngôn ngữ mô tả thiết kế, giống ngôn ngữ lập trình nhưng có mức trừu tượng cao hơn.",
        "Ngôn ngữ đặc tả yêu cầu.",
        "Ngôn ngữ tự nhiên địa phương."
      ],
      "answer": 0,
      "explanation": "Theo giáo trình: Ngôn ngữ tự nhiên có cấu trúc,..."
    },
    {
      "id": 20,
      "question": "Đặc tả mà ở đó các từ ngữ, cú pháp, ngữ nghĩa được định nghĩa hình thức dựa vào toán học là:",
      "options": [
        "Đặc tả hình thức.",
        "Đặc tả phi hình thức.",
        "Đặc tả hình thức và đặc tả phi hình thức.",
        "Đặc tả sử dụng ngôn ngữ tự nhiên."
      ],
      "answer": 0,
      "explanation": "Đặc tả hình thức (Formal specification) là phương pháp đặc tả sử dụng ngôn ngữ toán học chặt chẽ để định nghĩa cú pháp và ngữ nghĩa.."
    },
    {
      "id": 21,
      "question": "Đâu không phải là thuận lợi của việc sử dụng đặc tả hình thức:",
      "options": [
        "Nhiều người biết và dễ diễn đạt",
        "Cho phép chúng ta thấy và hiểu được bản chất bên trong của các yêu cầu, đây là cách tốt nhất để làm giảm các lỗi, các thiếu sót có thể xảy ra và giúp cho công việc thiết kế được thuận lợi.",
        "Do chúng ta sử dụng toán học cho việc đặc tả nên có thể dựa vào các công cụ toán học khi phân tích và điều này làm tăng thêm tính chắc chắn và tính đầy đủ của hệ thống.",
        "Đặc tả hình thức, bản thân nó cho chúng ta một cách thức cho việc kiểm tra hệ thống sau này."
      ],
      "answer": 3,
      "explanation": "Theo giáo trình: Đặc tả hình thức, bản thân nó cho chúng ta một cách thức cho việc kiểm tra hệ thống sau này...."
    },
    {
      "id": 22,
      "question": "Để phát triển các hệ thống tương đối phức tạp có những hướng tiếp cận đặc tả hình thức nào?",
      "options": [
        "Tiếp cận đại số, hệ thống được mô tả dưới dạng các toán tử và các quan hệ.",
        "Tiếp cận mô hình, mô hình hệ thống được cấu trúc sử dụng các thực thể toán học như là các tập hợp và các thứ tự.",
        "Tiếp cận đại số, hệ thống được mô tả dưới dạng các toán tử, các quan hệ và tiếp cận mô hình, mô hình hệ thống được cấu trúc sử dụng các thực thể toán học như là các tập hợp, các thứ tự.",
        "Tiếp cận văn bản tự nhiên."
      ],
      "answer": 0,
      "explanation": "Theo giáo trình: Tiếp cận đại số, hệ thống được mô tả dưới dạng các toán tử và các quan hệ...."
    },
    {
      "id": 23,
      "question": "Trong khẳng định dưới đây đâu là nguyên lý đặc tả yêu cầu:",
      "options": [
        "Đặc tả hệ thống phải là một mô hình thiết kế",
        "Đặc tả hệ thống phải là một mô hình cài đặt",
        "Đặc tả hệ thống phải là một mô hình kết nối thiết bị",
        "Đặc tả hệ thống phải là một mô hình nhận thức"
      ],
      "answer": 3,
      "explanation": "Đặc tả hệ thống phải là một mô hình nhận thức (cognitive model) phản ánh cách người dùng và nhà phân tích hiểu về hệ thống.."
    },
    {
      "id": 24,
      "question": "Đâu không phải là nguyên lý đặc tả yêu cầu.",
      "options": [
        "Phân tách chức năng với cài đặt",
        "Cần tới ngôn ngữ đặc tả hệ thống hướng tiến trình",
        "Đặc tả phải bao gồm cả môi trường mà hệ thống vận hành",
        "Đặc tả hệ thống phải là một mô hình kết nối thiết bị."
      ],
      "answer": 0,
      "explanation": "Theo giáo trình: Nguyên lý 1: Phân tách chức năng với cài đặt: đặc tả là mô tả điều mong muốn chứ không phải cách thức thực hiện (cài đặt). Kết quả thu được theo dạng ..."
    },
    {
      "id": 25,
      "question": "Đâu không phải là nguyên lý đặc tả yêu cầu.",
      "options": [
        "Đặc tả hệ thống phải là một mô hình nhận thức",
        "Cần tới ngôn ngữ đặc tả hệ thống hướng tiến trình",
        "Đặc tả phải bao gồm cả môi trường mà hệ thống vận hành",
        "Đặc tả hệ thống phải là một mô hình cài đặt"
      ],
      "answer": 0,
      "explanation": "Theo giáo trình: Nguyên lý 5: Đặc tả hệ thống phải là một mô hình nhận thức: không phải là mô hình thiết kế hay cài đặt. Nó phải mô tả một hệ thống như cộng đồng người..."
    },
    {
      "id": 26,
      "question": "Đâu là nhược điểm của đặc tả bằng ngôn ngữ tự nhiên?",
      "options": [
        "Khó hiểu.",
        "Khó đặc tả.",
        "Gây hiểu nhầm giữa hai đối tượng.",
        "Đặc tả cứng nhắc, thiếu đa dạng."
      ],
      "answer": 0,
      "explanation": "Theo giáo trình: C là một ngôn ngữ ngắn gọn, xúc tích và khó hiểu vì thế nó chỉ thực sự hiệu quả cho những người lập trình có nhiều kỹ năng và kinh nghiệm về lập trình..."
    },
    {
      "id": 27,
      "question": "Đối với các dự án quy mô lớn, người ta hạn chế sử dụng phương pháp đặc tả nào?",
      "options": [
        "Đặc tả toán học.",
        "Đặc tả bằng ngôn ngữ thiết kế.",
        "Đặc tả bằng ngôn ngữ tự nhiên có cấu trúc.",
        "Đặc tả bằng ngôn ngữ tự nhiên."
      ],
      "answer": 0,
      "explanation": "Theo giáo trình: Đặc tả toán học, ......"
    },
    {
      "id": 28,
      "question": "Đâu không phải là nguyên lý đặc tả yêu cầu phần mềm?",
      "options": [
        "Đặc tả phải bao gồm cả môi trường mà hệ thống vận hành.",
        "Phân tách chức năng với cài đặt.",
        "Đặc tả hệ thống phải là một mô hình nhận thức.",
        "Đặc tả không quan trọng môi trường mà hệ thống vận hành."
      ],
      "answer": 1,
      "explanation": "Theo giáo trình: Nguyên lý 1: Phân tách chức năng với cài đặt: đặc tả là mô tả điều mong muốn chứ không phải cách thức thực hiện (cài đặt). Kết quả thu được theo dạng ..."
    },
    {
      "id": 29,
      "question": "Thành phần nào không phải là của tài liệu yêu cầu phần mềm: 1. Giới thiệu 2. Thuật ngữ 3. Mô hình hệ thống 4. Định nghĩa yêu cầu chức năng 5. Định nghĩa yêu cầu phi chức năng 6. Tiến triển thực hiện từng giai đoạn 7. Đặc tả yêu cầu",
      "options": [
        "1 - 6",
        "2 - 6",
        "7",
        "6"
      ],
      "answer": 3,
      "explanation": "Tiến triển thực hiện từng giai đoạn (Project progress) thuộc kế hoạch dự án, không phải thành phần của tài liệu đặc tả yêu cầu SRS.."
    },
    {
      "id": 30,
      "question": "Đâu không phải là khó khăn của đặc tả hình thức?",
      "options": [
        "Linh hoạt, mềm dẻo dẫn đến sự hiểu nhầm giữa hai bên.",
        "Khách hàng không thích đặc tả hình thức.",
        "Quản lý phần mềm có tính bảo thủ cố hữu của nó, không sẵn sàng chấp nhận các kỹ thuật mới.",
        "Chi phí cho việc đặc tả hình thức thường cao hơn so với các đặc tả khác."
      ],
      "answer": 3,
      "explanation": "Theo giáo trình: Chi phí cho việc đặc tả hình thức thường cao hơn so với các đặc tả khác (tuy phần cài đặt sẽ thấp hơn), nên khó để chứng minh rằng chi phí tương đối c..."
    },
    {
      "id": 31,
      "question": "Kỹ thuật phỏng vấn sử dụng kiểu câu hỏi cho nhiều câu trả lời khác nhau là dạng câu hỏi nào?",
      "options": [
        "Câu hỏi mở",
        "Câu hỏi đóng",
        "Câu hỏi khó",
        "Câu hỏi dễ"
      ],
      "answer": 0,
      "explanation": "Câu hỏi mở (Open-ended questions) cho phép người được phỏng vấn tự do trả lời theo quan điểm của họ mà không bị giới hạn.."
    },
    {
      "id": 32,
      "question": "\"Tập hợp ba hoặc nhiều hơn một số người cho một thời hạn nhất định để thảo luận một số chủ đề\" là kỹ thuật thu thập dữ liệu nào?",
      "options": [
        "Phỏng vấn",
        "Họp nhóm",
        "Quan sát",
        "Xem xét tài liệu"
      ],
      "answer": 0,
      "explanation": "Theo giáo trình: Họp nhóm là việc tập hợp ba hoặc nhiều hơn một số người cho một thời hạn nhất định để thảo luận một số chủ đề. Họp nhóm có thể vừa bổ sung và thay thế..."
    },
    {
      "id": 33,
      "question": "\"Đóng vai người sử dụng phần mềm và thực hiện các công việc chuyên môn trong một khoảng thời gian nhất định\" là kỹ thuật thu thập dữ liệu nào?",
      "options": [
        "Họp nhóm",
        "Ấn định công việc tạm thời",
        "Quan sát",
        "Phỏng vấn"
      ],
      "answer": 0,
      "explanation": "Theo giáo trình: Hệ thông tin điều hành tương tự hệ hỗ trợ quyết định theo nhóm về sự khan hiếm và thiếu tổng quát về các thông tin - tri thức - liên quan. Hệ thông ti..."
    },
    {
      "id": 34,
      "question": "Trong các kỹ thuật sau, đâu không phải là kỹ thuật để thu thập dữ liệu?",
      "options": [
        "Phỏng vấn",
        "Họp nhóm",
        "Quan sát",
        "Tiếp xúc"
      ],
      "answer": 0,
      "explanation": "Theo giáo trình: Các khối hỗ trợ quyết định theo nhóm không phải là các kiến thức chung mà cũng không được sử dụng thường xuyên. Chúng ta có thể xây dựng một hệ hỗ trợ..."
    },
    {
      "id": 35,
      "question": "Câu hỏi mà câu trả lời là “có” hoặc “không” hoặc một câu trả lời cụ thể là dạng câu hỏi nào của kỹ thuật phỏng vấn?",
      "options": [
        "Câu hỏi đóng",
        "Câu hỏi mở",
        "Câu hỏi dễ",
        "Câu hỏi khó"
      ],
      "answer": 0,
      "explanation": "Câu hỏi đóng (Closed questions) yêu cầu câu trả lời giới hạn như Có/Không hoặc chọn trong các phương án định sẵn.."
    },
    {
      "id": 36,
      "question": "Ví dụ có câu hỏi là: “Bạn có dùng các báo cáo hàng tháng không?” hay \"Bạn có in hóa đơn hàng ngày không?\", thuộc dạng câu hỏi nào của kỹ thuật phỏng vấn?",
      "options": [
        "Câu hỏi đóng",
        "Câu hỏi mở",
        "Câu hỏi dễ",
        "Câu hỏi khó"
      ],
      "answer": 0,
      "explanation": "Câu hỏi như 'Bạn có dùng báo cáo hàng tháng không?' yêu cầu trả lời Có/Không, đây là dạng câu hỏi đóng điển hình.."
    },
    {
      "id": 37,
      "question": "Đâu không phải là ưu điểm của phỏng vấn có cấu trúc?",
      "options": [
        "Dễ quản lý và đánh giá",
        "Đánh giá được nhiều mục đích",
        "Không cần đào tạo nhiều",
        "Có khả năng mềm dẻo nhất"
      ],
      "answer": 2,
      "explanation": "Theo giáo trình: - Không cần đào tạo nhiều..."
    },
    {
      "id": 38,
      "question": "Đâu không là ưu điểm của phương pháp họp nhóm:",
      "options": [
        "Có thể tạo ra quyết định.",
        "Nhận được cả thông tin tổng hợp và chi tiết.",
        "Phương pháp tốt cho các yêu cầu bên ngoài .",
        "Kỹ sư phần mềm có thể tập trung vào vấn đề, mà không bị ảnh hưởng bởi người khác."
      ],
      "answer": 2,
      "explanation": "Theo giáo trình: Phương pháp tốt cho các yêu cầu bên ngoài,..."
    },
    {
      "id": 39,
      "question": "Đâu không phải là nhược điểm của kỹ thuật quan sát?",
      "options": [
        "Thời gian của quan sát có thể không biểu diễn cho các công việc diễn ra thông thường",
        "Ý nghĩ là đang bị quan sát có thể làm thay đổi thói quen thường ngày của người bị quan sát",
        "Tốn thời gian",
        "Dễ chuyển sang các chủ đề không liên quan như là chính trị, thể thao,..."
      ],
      "answer": 0,
      "explanation": "Theo giáo trình: Thời gian của quan sát có thể không biểu diễn cho các công việc diễn ra thông thường,..."
    },
    {
      "id": 40,
      "question": "Ưu điểm nào sau đây không phải là ưu điểm của kỹ thuật quan sát?",
      "options": [
        "Tập hợp được nhiều người dùng liên quan",
        "Kỹ sư phần mềm có thể nhận được sự hiểu biết tốt về môi trường công tác hiện tại và quá trình xử lý thông qua quan sát.",
        "Kỹ sư phần mềm có thể tập trung vào vấn đề, mà không bị ảnh hưởng bởi người khác.",
        "Các ngăn cách giữa kỹ sư phần mềm và các người được phỏng vấn sẽ được vượt qua bởi quan sát"
      ],
      "answer": 0,
      "explanation": "Quan sát trực tiếp giúp BA hiểu rõ môi trường thực tế và vượt qua khoảng cách giao tiếp, nhưng không dùng để tập hợp nhiều người dùng.."
    },
    {
      "id": 41,
      "question": "Nhược điểm nào không phải là của phỏng vấn có cấu trúc?",
      "options": [
        "Chi phí chuẩn bị lớn",
        "Tính cấu trúc có thể không thích hợp cho mọi tình huống",
        "Giảm tính chủ động của các người phỏng vấn",
        "Tốn thời gian lựa chọn và phân tích thông tin"
      ],
      "answer": 1,
      "explanation": "Theo giáo trình: Tính cấu trúc có thể không thích hợp cho mọi tình huống..."
    },
    {
      "id": 42,
      "question": "Nhược điểm nào không phải là nhược điểm của phỏng vấn không có cấu trúc?",
      "options": [
        "Lãng phí thời gian phỏng vấn",
        "Người phỏng vấn có thể định kiến với các câu hỏi",
        "Tốn thời gian lựa chọn và phân tích thông tin",
        "Giảm tính chủ động của các người phỏng vấn."
      ],
      "answer": 0,
      "explanation": "Theo giáo trình: - Lãng phí thời gian phỏng vấn..."
    },
    {
      "id": 43,
      "question": "Tính cấu trúc của đặc tính dữ liệu:",
      "options": [
        "Đặc biệt quan trọng bởi vì thiếu nó ta có thể tạo ứng dụng sai",
        "Đặc biệt quan trọng bởi vì thiếu nó ta có thể xác định yêu cầu sai",
        "Đặc biệt quan trọng bởi vì thiếu nó ta có thể phân tích ứng dụng sai",
        "Đặc biệt quan trọng bởi vì thiếu nó ta có thể cài đặt ứng dụng sai"
      ],
      "answer": 0,
      "explanation": "Theo giáo trình: Cấu trúc của thông tin định hướng về phần mở rộng theo đó thông tin có thể được phân loại theo cách nào đó. Cấu trúc có thể tham chiếu tới các hàm, mô..."
    },
    {
      "id": 44,
      "question": "Khi xây dựng phần mềm quản lý bệnh viện, để thu thập dữ liệu về các vấn đề mà bác sĩ gặp phải trong quá trình làm việc, phương pháp nào sau đây là phù hợp nhất?",
      "options": [
        "Khảo sát bệnh nhân",
        "Phỏng vấn bác sĩ",
        "Phân tích hồ sơ bệnh án",
        "Quan sát quy trình làm việc tại phòng khám"
      ],
      "answer": 1,
      "explanation": "Để hiểu các vấn đề nghiệp vụ thực tế của bác sĩ, phỏng vấn trực tiếp (phỏng vấn bác sĩ) là phương pháp trực quan và phù hợp nhất.."
    },
    {
      "id": 45,
      "question": "Bạn đang phát triển một phần mềm quản lý bệnh viện, để thu thập yêu cầu của bác sĩ về chức năng kê đơn thuốc, phương pháp nào sau đây là phù hợp nhất?",
      "options": [
        "Phỏng vấn bác sĩ về các loại thuốc thường kê",
        "Quan sát bác sĩ kê đơn trong một ngày làm việc",
        "Phân tích các đơn thuốc đã kê trong một tháng",
        "Tất cả các phương án trên"
      ],
      "answer": 3,
      "explanation": "Để thu thập yêu cầu chi tiết về kê đơn, cần kết hợp phỏng vấn (hỏi loại thuốc), quan sát thực tế và phân tích các đơn thuốc mẫu trước đó.."
    },
    {
      "id": 46,
      "question": "Bạn đang phát triển một ứng dụng đặt phòng khách sạn, để hiểu rõ hơn về hành vi đặt phòng của khách hàng, phương pháp nào sau đây là phù hợp nhất?",
      "options": [
        "Phỏng vấn các chủ khách sạn",
        "Phân tích dữ liệu đặt phòng từ các trang web du lịch",
        "Quan sát hành vi của khách hàng tại quầy lễ tân",
        "Tổ chức các nhóm thảo luận với khách hàng thường xuyên đi du lịch"
      ],
      "answer": 3,
      "explanation": "Để hiểu sâu hành vi và mong muốn của khách hàng đặt phòng, thảo luận nhóm (Focus Group) với các khách du lịch thường xuyên là tối ưu.."
    },
    {
      "id": 47,
      "question": "Bạn muốn thu thập ý kiến của người dùng về giao diện của một ứng dụng di động, công cụ nào sau đây phù hợp nhất để thực hiện việc này?",
      "options": [
        "Phỏng vấn trực tiếp",
        "Khảo sát trực tuyến",
        "Nhóm tập trung",
        "Tất cả đều đúng"
      ],
      "answer": 3,
      "explanation": "Thu thập ý kiến người dùng về giao diện có thể sử dụng khảo sát trực tuyến, phỏng vấn trực tiếp hoặc họp nhóm tập trung tùy quy mô.."
    },
    {
      "id": 48,
      "question": "Trong một cuộc phỏng vấn, bạn đã sử dụng câu hỏi đóng để thu thập thông tin cơ bản. Bước tiếp theo nên là gì?",
      "options": [
        "Kết thúc cuộc phỏng vấn",
        "Đặt thêm các câu hỏi đóng để làm rõ hơn",
        "Đặt các câu hỏi mở để khám phá sâu hơn",
        "Thay đổi chủ đề"
      ],
      "answer": 2,
      "explanation": "Sau câu hỏi đóng để lấy thông tin nền tảng, cần đặt các câu hỏi mở để khai thác sâu hơn lý do, nghiệp vụ và tâm tư của người dùng.."
    },
    {
      "id": 49,
      "question": "“Bạn đã từng sử dụng sản phẩm này chưa?” Câu hỏi này thuộc dạng câu hỏi nào trong kỹ thuật thu thập dữ liệu?",
      "options": [
        "Câu hỏi đóng",
        "Câu hỏi mở",
        "Câu hỏi dễ",
        "Câu hỏi khó"
      ],
      "answer": 0,
      "explanation": "Câu hỏi 'Bạn đã từng sử dụng chưa?' chỉ có thể trả lời Có hoặc Chưa, đây là câu hỏi đóng."
    },
    {
      "id": 50,
      "question": "“Bạn có đồng ý với ý kiến rằng sản phẩm này dễ sử dụng không?”. Câu hỏi này thuộc dạng câu hỏi nào trong kỹ thuật thu thập dữ liệu?",
      "options": [
        "Câu hỏi đóng",
        "Câu hỏi mở",
        "Câu hỏi dễ",
        "Câu hỏi khó"
      ],
      "answer": 0,
      "explanation": "Câu hỏi hỏi mức độ đồng ý về giao diện dễ dùng hay không là câu hỏi đóng (trả lời Có/Không hoặc theo thang đo định sẵn).."
    }
  ],
  "3": [
    {
      "id": 354,
      "question": "Thiết kế phần mềm là xác định cách thức thực hiện những gì đã được đặt ra ở phần phân tích nhằm để trả lời câu hỏi nào?",
      "options": [
        "\"cái gì-what\"",
        "\"như thế nào-how\"",
        "\"cái gì-what\" và \"như thế nào-how\"",
        "\"bao nhiêu-how many\""
      ],
      "answer": 1,
      "explanation": "Giai đoạn Phân tích trả lời câu hỏi 'Làm cái gì' (What), còn giai đoạn Thiết kế trả lời câu hỏi 'Làm như thế nào' (How)."
    },
    {
      "id": 355,
      "question": "Trong ba giai đoạn: thiết kế, cài đặt và bảo trì thì giai đoạn nào là giai đoạn quan trọng nhất, chịu trách nhiệm đến 80% đối với sự thành công của một sản phẩm:",
      "options": [
        "Giai đoạn thiết kế",
        "Giai đoạn cài đặt",
        "Giai đoạn bảo trì",
        "Không có giai đoạn nào"
      ],
      "answer": 0,
      "explanation": "Thiết kế là giai đoạn nền tảng, các quyết định ở bước này ảnh hưởng trực tiếp đến chất lượng, chi phí bảo trì và sự thành công của sản phẩm."
    },
    {
      "id": 356,
      "question": "Nhiệm vụ của giai đoạn nào trong các giai đoạn thiết kế, cài đặt, kiểm thử, bảo trì là chuyển đổi những yêu cầu của hệ thống (kết quả của quá trình phân tích) sang dạng biểu diễn của hệ thống phần mềm:",
      "options": [
        "Giai đoạn thiết kế",
        "Giai đoạn cài đặt",
        "Giai đoạn bảo trì",
        "Giai đoạn kiểm thử"
      ],
      "answer": 0,
      "explanation": "Thiết kế là bước tiếp nhận các yêu cầu hệ thống đã được phân tích và chuyển đổi chúng thành kiến trúc, dữ liệu và giao diện."
    },
    {
      "id": 357,
      "question": "Trong quan điểm quản lý: thiết kế phần mềm được tiến hành gồm những bước nào:",
      "options": [
        "Thiết kế sơ bộ và thiết kế bộ phận",
        "Thiết kế chi tiết",
        "Thiết kế sơ bộ và thiết kế chi tiết",
        "Thiết kế bộ phận"
      ],
      "answer": 2,
      "explanation": "Về mặt quản lý dự án, tiến trình thiết kế thường chia làm hai bước lớn: Thiết kế sơ bộ (mức cao) và Thiết kế chi tiết."
    },
    {
      "id": 358,
      "question": "Đối với khía cạnh kỹ thuật, xuất hiện một số hoạt động thiết kế bao gồm:",
      "options": [
        "Thiết kế dữ liệu, Thiết kế kiến trúc, Thiết kế đối tượng, Thiết kế thủ tục",
        "Thiết kế dữ liệu, Thiết kế kiến trúc, Thiết kế thủ tục, Thiết kế đối tượng, Thiết kế giao diện",
        "Thiết kế kiến trúc, Thiết kế đối tượng, Thiết kế giao diện",
        "Thiết kế dữ liệu, Thiết kế thủ tục, Thiết kế giao diện"
      ],
      "answer": 1,
      "explanation": "Về khía cạnh kỹ thuật, thiết kế bao gồm: dữ liệu, kiến trúc, thủ tục, đối tượng và giao diện."
    },
    {
      "id": 359,
      "question": "Tiến trình thiết kế được thực hiện theo thứ tự nào:",
      "options": [
        "Phát thảo thiết kế phi hình thức, Thiết kế phi hình thức, Thiết kế hình thức, Thiết kế hoàn chỉnh.",
        "Thiết kế hình thức, Phát thảo thiết kế phi hình thức, Thiết kế phi hình thức, Thiết kế hoàn chỉnh.",
        "Thiết kế hoàn chỉnh, Phát thảo thiết kế phi hình thức, Thiết kế phi hình thức, Thiết kế hình thức.",
        "Phát thảo thiết kế phi hình thức, Thiết kế hình thức,Thiết kế phi hình thức, Thiết kế hoàn chỉnh."
      ],
      "answer": 0,
      "explanation": "Quá trình thiết kế luôn đi từ trừu tượng (phi hình thức) đến cụ thể (hình thức) và cuối cùng là bản thiết kế hoàn chỉnh."
    },
    {
      "id": 360,
      "question": "Trong thiết kế phần mềm, giai đoạn đặc tả trừu tượng là:",
      "options": [
        "Các dịch vụ cung cấp bởi một hệ con được phân chia qua các thành phần của hệ con đó.",
        "Đối với các hệ con, đặc tả các dịch vụ mà nó phải cung cấp và các ràng buộc mà nó phải tuân theo.",
        "Các hệ con tạo nên hệ tổng thể và các quan hệ của chúng là được minh định và ghi thành tài liệu",
        "Các kiến trúc dữ liệu được dùng trong việc thực hiện hệ thống được thiết kế chi tiết và được đặc tả"
      ],
      "answer": 1,
      "explanation": "Đặc tả trừu tượng ở mức kiến trúc là việc xác định rõ các dịch vụ và ràng buộc của từng hệ thống con."
    },
    {
      "id": 361,
      "question": "Trong thiết kế phần mềm, giai đoạn thiết kế cấu trúc dữ liệu là:",
      "options": [
        "Các dịch vụ cung cấp bởi một hệ con được phân chia qua các thành phần của hệ con đó.",
        "Các hệ con tạo nên hệ tổng thể và các quan hệ của chúng là được minh định và ghi thành tài liệu",
        "Các cấu trúc dữ liệu được dùng trong việc thực hiện hệ thống được thiết kế chi tiết và được đặc tả",
        "Đối với các hệ con, đặc tả các dịch vụ mà nó phải cung cấp và các ràng buộc mà nó phải tuân theo"
      ],
      "answer": 2,
      "explanation": "Thiết kế cấu trúc dữ liệu là định nghĩa cụ thể cách tổ chức, lưu trữ dữ liệu để dùng cho hệ thống."
    },
    {
      "id": 362,
      "question": "Trong thiết kế phần mềm, giai đoạn thiết kế giao diện có nội dung:",
      "options": [
        "Các dịch vụ cung cấp bởi một hệ con được phân chia qua các thành phần của hệ con đó",
        "Các hệ con tạo nên hệ tổng thể và các quan hệ của chúng là được minh định và ghi thành tài liệu.",
        "Đối với các hệ con, đặc tả các dịch vụ mà nó phải cung cấp và các ràng buộc mà nó phải tuân theo",
        "Giao diện của từng hệ con với các hệ con khác được thiết kế và ghi thành tài liệu."
      ],
      "answer": 3,
      "explanation": "Thiết kế giao diện (Interface design) ở mức hệ thống con là đặc tả cách mà các hệ con giao tiếp với nhau."
    },
    {
      "id": 363,
      "question": "Trong thiết kế phần mềm, giai đoạn thiết kế các thành phần có nội dung:",
      "options": [
        "Các hệ con tạo nên hệ tổng thể và các quan hệ của chúng là được minh định và ghi thành tài liệu",
        "Đối với các hệ con, đặc tả các dịch vụ mà nó phải cung cấp và các ràng buộc mà nó phải tuân theo",
        "Các dịch vụ cung cấp bởi một hệ con được phân chia qua các thành phần của hệ con đó",
        "Giao diện của từng hệ con với các hệ con khác được thiết kế và ghi thành tài liệu"
      ],
      "answer": 2,
      "explanation": "Thiết kế thành phần (Component design) tập trung vào việc phân chia dịch vụ của hệ con thành các thành phần (modules) nhỏ hơn."
    },
    {
      "id": 364,
      "question": "Thiết kế phần mềm bao gồm những công việc chính:",
      "options": [
        "Xác định kiến trúc phần mềm",
        "Chọn lựa cách thức thực hiện của từng thành phần và mô tả lại cách thực hiện này",
        "Xác định kiến trúc phần mềm và chọn lựa cách thức thực hiện của từng thành phần và mô tả lại cách thực hiện này",
        "Xác định thời gian hoàn tất phần mềm"
      ],
      "answer": 2,
      "explanation": "Thiết kế bao gồm cả việc định hình kiến trúc tổng thể lẫn chọn lựa thuật toán, cấu trúc dữ liệu chi tiết cho từng thành phần."
    },
    {
      "id": 365,
      "question": "Thiết kế một phần mềm cụ thể sẽ mang lại:",
      "options": [
        "Duy nhất một kết quả",
        "Nhiều kết quả khác nhau với các chọn lựa khác nhau về cách thức thực hiện",
        "Duy nhất một kết quả cho dù chọn lựa cách thức thực hiện khác nhau",
        "Duy nhất một kết quả vì chỉ có duy nhất một phương pháp thiết kế phần mềm"
      ],
      "answer": 1,
      "explanation": "Vì thiết kế là một quá trình sáng tạo và đánh giá lựa chọn, nên có thể có nhiều giải pháp thiết kế khác nhau cho cùng một bài toán."
    },
    {
      "id": 366,
      "question": "Kết quả của việc thiết kế phần mềm không có bản thiết kế về:",
      "options": [
        "Thành phần Giao diện",
        "Thành phần Xử lý",
        "Thành phần Dữ liệu",
        "Thành phần Chức năng"
      ],
      "answer": 3,
      "explanation": "Kết quả thiết kế thường chia làm 3 thành phần chính: Dữ liệu, Xử lý và Giao diện. 'Chức năng' đã được xác định ở khâu Phân tích."
    },
    {
      "id": 367,
      "question": "Bản thiết kế thành phần giao diện bao gồm:",
      "options": [
        "Nội dung và hình thức trình bày các màn hình giao tiếp của phần mềm",
        "Hệ thống các giao tác mà người dùng có thể thực hiện trên màn hình giao tiếp và xử lý tương ứng của PM",
        "Nội dung và hình thức trình bày các màn hình giao tiếp của phần mềm cùng hệ thống các giao tác mà người dùng có thể thực hiện trên màn hình giao tiếp và xử lý tương ứng của PM",
        "Hình thức các màn hình giao tiếp"
      ],
      "answer": 2,
      "explanation": "Bản thiết kế giao diện phải mô tả cả mặt hình thức (giao diện tĩnh) và các thao tác/giao tác tương tác của người dùng."
    },
    {
      "id": 368,
      "question": "Bản thiết kế thành phần xử lý bao gồm:",
      "options": [
        "Hệ thống các kiểu dữ liệu được sử dụng trong phần mềm và các tham biến được sử dụng trong phần mềm",
        "Hệ thống các biến được sử dụng trong phần mềm",
        "Hệ thống các kiểu dữ liệu được sử dụng trong phần mềm và hệ thống các hàm được sử dụng trong phần mềm",
        "Hệ thống các kiểu dữ liệu được sử dụng trong phần mềm và hệ thống các biến được sử dụng trong phần mềm"
      ],
      "answer": 2,
      "explanation": "Thành phần xử lý mô tả các cấu trúc/kiểu dữ liệu và các hàm/thuật toán để thao tác trên dữ liệu đó."
    },
    {
      "id": 369,
      "question": "Bản thiết kế thành phần dữ liệu không bao gồm: .",
      "options": [
        "Nội dung của công việc ghi chép vào sổ sách trong thế giới thực trên bộ nhớ phụ",
        "Dạng lưu trữ được sử dụng của PM (tập tin, cơ sở dữ liệu,…)",
        "Hệ thống các thành phần lưu trữ cùng với quan hệ của chúng",
        "Hệ thống các kết quả của chương trình"
      ],
      "answer": 3,
      "explanation": "Kết quả thiết kế dữ liệu mô tả cấu trúc lưu trữ (CSDL, tập tin) chứ không bao gồm kết quả (output) khi chương trình chạy."
    },
    {
      "id": 370,
      "question": "Trong 4 nội dung dưới đây, nội dung nào sai? Thiết kế được dùng để:",
      "options": [
        "Làm cơ sở hợp đồng giữa hai bên",
        "Làm cơ sở cho việc thực hiện chi tiết",
        "Dùng làm phương tiện liên lạc giữa các nhóm",
        "Cung cấp thông tin cho những người bảo trì hệ thống"
      ],
      "answer": 0,
      "explanation": "Tài liệu Yêu cầu (SRS) mới là cơ sở hợp đồng. Bản thiết kế là tài liệu kỹ thuật dành cho đội lập trình và bảo trì."
    },
    {
      "id": 371,
      "question": "Trong các phát biểu sau, phát biểu nào là đúng:",
      "options": [
        "Thiết kế hướng đối tượng chỉ dùng cho lập trình hướng đối tượng",
        "Thiết kế hướng đối tượng có những điểm giống lập trình hướng đối tượng",
        "Thiết kế hướng đối tượng có thể dùng cho cả lập trình hướng đối tượng và lập trình hướng chức năng",
        "Thiết kế hướng đối tượng là lập trình hướng đối tượng"
      ],
      "answer": 2,
      "explanation": "Mặc dù Thiết kế Hướng đối tượng sinh ra để phục vụ OOP, ta vẫn có thể dùng các nguyên lý của nó để cài đặt bằng ngôn ngữ hướng thủ tục."
    },
    {
      "id": 372,
      "question": "Một số tiêu chí đánh giá về chất lượng thiết kế:",
      "options": [
        "Sự kết dính, tính đầy đủ, sự ghép nối, sự hiểu được, tính phổ dụng",
        "Sự kết dính, sự ghép nối, sự hiểu được, tính thích nghi",
        "Sự ghép nối, sự hiểu được, tính thích nghi, tính đầy đủ",
        "Sự kết dính, sự ghép nối, sự hiểu được, tính phổ dụng, tính thích nghi"
      ],
      "answer": 1,
      "explanation": "Chất lượng thiết kế đo lường qua các tiêu chí: Kết dính (Cohesion) cao, Ghép nối (Coupling) thấp, Sự hiểu được và Tính thích nghi."
    },
    {
      "id": 373,
      "question": "Trong các tính chất sau, tính chất nào là đặc trưng của thiết kế hướng đối tượng:",
      "options": [
        "Các đối tượng liên lạc với nhau thông qua các biến dùng chung",
        "Các đối tượng liên lạc với nhau thông qua trao đổi thông báo",
        "Các đối tượng là độc lập với nhau và liên lạc thông qua các biến dùng chung.",
        "Các đối tượng chia sẻ với nhau thông qua trạng thái hệ thống tập trung."
      ],
      "answer": 1,
      "explanation": "Đặc trưng cốt lõi của OOP là các đối tượng đóng gói dữ liệu và chỉ giao tiếp với nhau qua việc trao đổi thông báo (Message passing)."
    },
    {
      "id": 374,
      "question": "Trong các đặc điểm sau, đặc điểm nào không là ưu điểm của thiết kế hướng đối tượng?",
      "options": [
        "Dễ học và dễ sử dụng",
        "Dễ bảo trì và các đối tượng là độc lập",
        "Phản ánh một cách rõ ràng giữa các thực thể có thực",
        "Các đối tượng là các thành phần dùng lại được thích hợp"
      ],
      "answer": 0,
      "explanation": "Thiết kế hướng đối tượng đòi hỏi tư duy trừu tượng cao, nên có đường cong học tập khó hơn (không dễ học như hướng thủ tục)."
    },
    {
      "id": 377,
      "question": "Thiết kế hướng đối tượng và thiết kế hướng chức năng là 2 chiến lược thiết kế:",
      "options": [
        "Độc lập không liên quan đến nhau",
        "Đối kháng nhau",
        "Bổ sung và hỗ trợ cho nhau",
        "Hoàn toàn giống nhau"
      ],
      "answer": 2,
      "explanation": "Hướng chức năng và Hướng đối tượng không đối kháng mà có thể bổ sung cho nhau tùy từng mô-đun trong một hệ thống lớn."
    },
    {
      "id": 378,
      "question": "Đâu không phải là yêu cầu thiết kế:",
      "options": [
        "Tính sáng sủa, dễ đọc",
        "Dễ thử nghiệm.",
        "Linh hoạt đối với những yêu cầu thay đổi không định trước.",
        "Kích thước module đủ lớn"
      ],
      "answer": 3,
      "explanation": "Các module nên có kích thước vừa phải (nhỏ gọn) để dễ kiểm soát và kiểm thử, chứ không phải 'đủ lớn'."
    },
    {
      "id": 379,
      "question": "Độ đo về tính khớp lại với nhau của một thành phần liên quan chủ yếu đến tiêu chuẩn nào của chất lượng thiết kế:",
      "options": [
        "Sự kết dính",
        "Sự ghép nối",
        "Sự hiểu được",
        "Sự thích nghi"
      ],
      "answer": 0,
      "explanation": "Sự kết dính (Cohesion) đo lường mức độ liên kết chặt chẽ và nhất quán bên trong một module."
    },
    {
      "id": 380,
      "question": "Loại trừu tượng nào không được dùng trong thiết kế phần mềm?",
      "options": [
        "Điều khiển",
        "Dữ liệu",
        "Thủ tục",
        "Chương trình"
      ],
      "answer": 3,
      "explanation": "Các loại trừu tượng trong thiết kế gồm: Trừu tượng dữ liệu, trừu tượng thủ tục, và trừu tượng điều khiển. Không có trừu tượng 'Chương trình'."
    },
    {
      "id": 381,
      "question": "Loại mô hình nào không được có trong kiến trúc phần mềm:",
      "options": [
        "Dữ liệu",
        "Động",
        "Xử lý",
        "Cấu trúc"
      ],
      "answer": 0,
      "explanation": "Kiến trúc phần mềm quan tâm đến cấu trúc tổng thể, luồng điều khiển và sự phân tán, còn mô hình 'Dữ liệu' chi tiết thuộc về thiết kế dữ liệu."
    },
    {
      "id": 382,
      "question": "Cấp bậc điều khiển thể hiện :",
      "options": [
        "Thứ tự quyết định",
        "Việc tổ chức của các module",
        "Sự lặp lại của những hoạt động",
        "Sự tuần tự của các tiến trình"
      ],
      "answer": 1,
      "explanation": "Cấp bậc điều khiển (Control hierarchy) thể hiện sự phân cấp và gọi hàm giữa các module trong hệ thống."
    },
    {
      "id": 383,
      "question": "Thủ tục phần mềm tập trung vào :",
      "options": [
        "Cấp bậc điều khiển trong một cảm nhận trừu tượng hơn",
        "Xử lý chi tiết của mỗi module riêng biệt",
        "Xử lý chi tiết của mỗi tập module",
        "Quan hệ giữa điều khiển và thủ tục"
      ],
      "answer": 1,
      "explanation": "Thủ tục phần mềm (Procedural design) đi sâu vào việc mô tả thuật toán và xử lý chi tiết bên trong từng module."
    },
    {
      "id": 384,
      "question": "Nguyên nhân của việc sinh lỗi do thiết kế mức thành phần trước khi thiết kế dữ liệu là :",
      "options": [
        "Thiết kế thành phần thì phụ thuộc vào ngôn ngữ còn thiết kế dữ liệu thì không",
        "Thiết kế dữ liệu thì dễ thực hiện hơn",
        "Thiết kế dữ liệu thì khó thực hiện",
        "Cấu trúc dữ liệu thường ảnh hưởng tới cách thức mà thíết kế thành phần phải theo"
      ],
      "answer": 3,
      "explanation": "Bắt buộc phải thiết kế dữ liệu trước vì cấu trúc dữ liệu ảnh hưởng trực tiếp đến cách thuật toán và thủ tục xử lý nó."
    },
    {
      "id": 385,
      "question": "Mục đích của tham chiếu chéo những yêu cầu (ma trận) trong tài liệu thiết kế là nhằm :",
      "options": [
        "Cho phép người quản lý theo dõi năng suất của nhóm thiết kế",
        "Xác minh là tất cả các yêu cầu đã được xem xét trong thiết kế",
        "Chỉ ra chi phí kết hợp với mỗi yêu cầu",
        "Cung cấp cho việc thực thi tên của những nhà thiết kế cho mỗi yêu cầu"
      ],
      "answer": 1,
      "explanation": "Ma trận tham chiếu chéo (Traceability Matrix) giúp đảm bảo không có yêu cầu nào bị bỏ sót trong quá trình thiết kế."
    },
    {
      "id": 386,
      "question": "Mục nào không là một phần của kiến trúc phần mềm :",
      "options": [
        "Chi tiết giải thuật",
        "Cơ sở dữ liệu",
        "Thiết kế dữ liệu",
        "Cấu trúc chương trình"
      ],
      "answer": 0,
      "explanation": "Kiến trúc mô tả mức độ vĩ mô (high-level) của hệ thống. Chi tiết giải thuật thuộc về thiết kế thủ tục mức vi mô."
    },
    {
      "id": 387,
      "question": "Đặc trưng nào là đúng cho kho dữ liệu, không phải là cơ sở dữ liệu đặc trưng?",
      "options": [
        "Hướng mức nghiệp vụ và kích thước lớn",
        "Thông tin đúng và hợp thời",
        "Tích hợp và không thường thay đổi",
        "Hướng mức nghiệp vụ và kích thước nhỏ"
      ],
      "answer": 2,
      "explanation": "Data Warehouse (Kho dữ liệu) lưu trữ dữ liệu lịch sử đã được tích hợp từ nhiều nguồn, chủ yếu để truy vấn nên không thường xuyên bị thay đổi."
    },
    {
      "id": 388,
      "question": "Mẫu kiến trúc không quan tâm tới thành phần nào?",
      "options": [
        "Ràng buộc",
        "Tập hợp những thành phần",
        "Mô hình ngữ nghĩa",
        "Mô hình mô phỏng"
      ],
      "answer": 3,
      "explanation": "Mẫu kiến trúc (Architectural Pattern) bao gồm các thành phần, cấu trúc và ràng buộc, không bao gồm 'mô hình mô phỏng'."
    },
    {
      "id": 389,
      "question": "Nhằm xác định những mẫu kiến trúc hay kết hợp những mẫu phù hợp nhất cho hệ thống đề nghị, kỹ thuật yêu cầu dùng để khám phá :",
      "options": [
        "Giải thuật phức tạp",
        "Đặc trưng và ràng buộc",
        "Điều khiển và dữ liệu",
        "Những mẫu thiết kế"
      ],
      "answer": 1,
      "explanation": "Để chọn mẫu kiến trúc phù hợp, kỹ sư cần phải làm rõ các đặc trưng hoạt động và các ràng buộc hệ thống."
    },
    {
      "id": 400,
      "question": "Phương pháp thiết kế nào không phải là thiết kế phần mềm?",
      "options": [
        "Thiết kế trực tiếp",
        "Thiết kế gián tiếp",
        "Thiết kế tổng quát",
        "Thiết kế trực tiếp, thiết kế gián tiếp"
      ],
      "answer": 2,
      "explanation": "Giáo trình chia ra hai phương pháp tiếp cận: Thiết kế trực tiếp và Thiết kế gián tiếp. 'Thiết kế tổng quát' là một giai đoạn chứ không phải phương pháp."
    },
    {
      "id": 401,
      "question": "Phương pháp thiết kế phần mềm nào nhận các kết quả từ giai đoạn xác định yêu cầu?",
      "options": [
        "Thiết kế trực tiếp",
        "Thiết kế gián tiếp",
        "Thiết kế dữ liệu",
        "Thiết kế xử lý"
      ],
      "answer": 0,
      "explanation": "Thiết kế trực tiếp lấy ngay tài liệu yêu cầu (Xác định yêu cầu) làm đầu vào để thiết kế mà bỏ qua khâu phân tích chi tiết."
    },
    {
      "id": 402,
      "question": "Phương pháp thiết kế phần mềm trực tiếp phù hợp với những loại phần mềm nào?",
      "options": [
        "Phần mềm mã nguồn mở",
        "Phần mềm có quy mô nhỏ",
        "Phần mềm mạng",
        "Phần mềm có quy mô lớn"
      ],
      "answer": 1,
      "explanation": "Thiết kế trực tiếp bỏ qua bước phân tích, do đó chỉ phù hợp và an toàn với các dự án phần mềm có quy mô nhỏ."
    },
    {
      "id": 403,
      "question": "Với phương pháp thiết kế phần mềm gián tiếp, việc thiết kế sẽ chỉ nhận:",
      "options": [
        "Một phần các kết quả sẽ được chuyển giao từ giai đoạn xác định yêu cầu, phần chính yếu sẽ được nhận qua giai đoạn khảo sát.",
        "Tất cả các kết quả sẽ được từ giai đoạn xác định yêu cầu.",
        "Tất cả các kết quả sẽ được từ giai đoạn phân tích.",
        "Một phần các kết quả sẽ được chuyển giao từ giai đoạn xác định yêu cầu, phần chính yếu sẽ được nhận qua giai đoạn phân tích."
      ],
      "answer": 3,
      "explanation": "Thiết kế gián tiếp đòi hỏi phải qua bước Phân tích hệ thống để làm rõ chi tiết yêu cầu trước khi thiết kế."
    },
    {
      "id": 404,
      "question": "Phương pháp thiết kế gián tiếp sẽ phù hợp với những phần mềm:",
      "options": [
        "Có quy mô vừa và nhỏ",
        "Có quy mô nhỏ",
        "Có quy mô lớn",
        "Có quy mô trung bình"
      ],
      "answer": 2,
      "explanation": "Nhờ có quá trình phân tích chi tiết, thiết kế gián tiếp giảm rủi ro, do đó bắt buộc áp dụng cho các dự án quy mô lớn."
    },
    {
      "id": 405,
      "question": "Trong kết quả thiết kế phần mềm, kết quả của thành phần xử lý không bao gồm:",
      "options": [
        "Danh sách các kiểu dữ liệu",
        "Danh sách các hàm",
        "Mô tả chi tiết các kiểu dữ liệu",
        "Danh sách các ràng buộc"
      ],
      "answer": 3,
      "explanation": "Thiết kế thành phần xử lý bao gồm các Hàm và Kiểu dữ liệu. Danh sách ràng buộc thường thuộc về Kiến trúc và Yêu cầu."
    },
    {
      "id": 406,
      "question": "Kết quả thiết kế thành phần nào gồm hệ thống các hàm cùng cấu trúc dữ liệu tương ứng:",
      "options": [
        "Thiết kế ứng dụng",
        "Thiết kế giao diện",
        "Thiết kế xử lý",
        "Thiết kế dữ liệu"
      ],
      "answer": 2,
      "explanation": "Thiết kế xử lý (hay Thiết kế thủ tục) là bước đi vào chi tiết cấu trúc dữ liệu và các hàm/thuật toán của một module."
    },
    {
      "id": 407,
      "question": "Các thông tin cần mô tả một màn hình giao diện gồm:",
      "options": [
        "Tên màn hình, nội dung màn hình.",
        "Tên màn hình, nội dung, hình thức trình bày màn hình.",
        "Tên màn hình, nội dung, hình thức trình bày, các thao tác có thể thực hiện.",
        "Tên màn hình, nội dung, hình thức trình bày, các thao tác có thể thực hiện và các cấu trúc dữ liệu tương ứng."
      ],
      "answer": 2,
      "explanation": "Mô tả một màn hình cần: Tên, nội dung tĩnh, cách trình bày và các thao tác (nút bấm, nhập liệu) người dùng có thể thực hiện."
    },
    {
      "id": 408,
      "question": "Yêu cầu tính nhất quán trong thiết kế giao diện, những thành phần tương tự nhau phải giống nhau về những mặt nào?",
      "options": [
        "Vị trí, ngôn ngữ, hình dáng, màu sắc và cách kích hoạt.",
        "Vị trí, ngôn ngữ, hình dáng và màu sắc.",
        "Vị trí, hình dáng, màu sắc và cách kích hoạt.",
        "Vị trí, ngôn ngữ, hình dáng, màu sắc cách kích hoạt và kết quả thực hiện."
      ],
      "answer": 0,
      "explanation": "Tính nhất quán đòi hỏi các phần tử tương đồng phải giống nhau về: Vị trí, ngôn ngữ, hình dáng, màu sắc và cách kích hoạt."
    },
    {
      "id": 409,
      "question": "Điều quan trọng nhất trong thiết kế phần mềm là:",
      "options": [
        "Độ chính xác",
        "Độ phức tạp",
        "Tính hiệu quả",
        "Chất lượng"
      ],
      "answer": 3,
      "explanation": "Đích đến cuối cùng của mọi quy trình phần mềm và thiết kế đều là đảm bảo Chất lượng phần mềm cao nhất."
    },
    {
      "id": 410,
      "question": "Vấn đề nào sau đây không ảnh hưởng nhiều đến thiết kế giao diện?",
      "options": [
        "Thời gian đáp ứng",
        "Năng khiếu thẩm mỹ và kỹ năng đồ họa của người thiết kế giao diện",
        "Quản lý lỗi",
        "Thời gian đáp ứng, Năng khiếu thẩm mỹ và kỹ năng đồ họa của người thiết kế giao diện."
      ],
      "answer": 1,
      "explanation": "Giao diện tốt chú trọng vào trải nghiệm người dùng (UX) và tính dễ dùng, năng khiếu thẩm mỹ (đồ họa bóng bẩy) ít quan trọng hơn yếu tố khoa học."
    },
    {
      "id": 411,
      "question": "Thông báo lỗi nên có tính chất nào sau đây?",
      "options": [
        "Nên dùng thông báo lỗi hệ thống của ngôn ngữ lập trình",
        "Chỉ ra lỗi do người dùng mắc phải khi chạy chương trình",
        "Nên đồng hành với các gợi ý âm thanh hay hình ảnh như tiếng beep, thông báo nhấp nháy hoặc có màu đặc biệt (đỏ)",
        "Nên dùng thông báo lỗi hệ thống của ngôn ngữ lập trình, chỉ ra lỗi do người dùng mắc phải khi chạy chương trình và nên đồng hành với các gợi ý âm thanh hay hình ảnh như tiếng beep, thông báo nhấp nháy hoặc có màu đặc biệt (đỏ)"
      ],
      "answer": 3,
      "explanation": "Thông báo lỗi tốt cần mang tính xây dựng: báo lỗi bằng cả text, âm thanh và màu sắc nổi bật để người dùng dễ nhận biết."
    },
    {
      "id": 412,
      "question": "Mô hình thiết kế phần mềm nào sau đây tương tự như bản vẽ chi tiết cửa và bố trí nội thất trong thiết kế kiến trúc nhà cửa?",
      "options": [
        "Thiết kế kiến trúc",
        "Thiết kế giao diện",
        "Thiết kế các thành phần hệ thống",
        "Thiết kế dữ liệu"
      ],
      "answer": 1,
      "explanation": "Thiết kế giao diện giống như bố trí nội thất phòng, cửa sổ ra vào... là nơi người dùng trực tiếp tiếp xúc và cảm nhận."
    },
    {
      "id": 413,
      "question": "Các bước thiết kế phần mềm nào sau đây thuộc khía cạnh kỹ thuật ?",
      "options": [
        "Thiết kế sơ bộ",
        "Thiết kế chi tiết",
        "Thiết kế dữ liệu",
        "Thiết kế tổng quát"
      ],
      "answer": 2,
      "explanation": "Các khía cạnh kỹ thuật gồm thiết kế: Dữ liệu, Kiến trúc, Giao diện, Thủ tục. 'Thiết kế sơ bộ/chi tiết' là cách nhìn quản lý."
    },
    {
      "id": 414,
      "question": "Chiến lược thiết kế nào sau đây có vùng dữ liệu dùng chung ?",
      "options": [
        "Thiết kế hướng chức năng",
        "Thiết kế hướng đối tượng.",
        "Thiết kế giao diện người sử dụng",
        "Thiết kế dữ liệu"
      ],
      "answer": 0,
      "explanation": "Trong thiết kế hướng chức năng, các module thường chia sẻ một vùng dữ liệu chung (global data). Điều này dễ sinh lỗi lề."
    },
    {
      "id": 415,
      "question": "Mô hình nào sau đây mà mọi dữ liệu được lưu trữ tại một cơ sở dữ liệu trung tâm có thể được truy cập bởi mọi phân hệ ?",
      "options": [
        "Mô hình kho dữ liệu",
        "Mô hình khách-phục vụ",
        "Mô hình máy trừu tượng",
        "Mô hình mạng ngang hàng"
      ],
      "answer": 0,
      "explanation": "Mô hình Kho dữ liệu (Repository Model) xây dựng dựa trên 1 CSDL trung tâm dùng chung cho mọi phân hệ."
    },
    {
      "id": 416,
      "question": "Chỉ ra phát biểu sai. Thiết kế dữ liệu ở mức thành phần:",
      "options": [
        "Thiết kế cơ sở dữ liệu",
        "Hiện thực thuộc tính dữ liệu thành cấu trúc dữ liệu",
        "Phát triển một tập những trừu tượng dữ liệu",
        "Tinh chế các đối tượng dữ liệu"
      ],
      "answer": 0,
      "explanation": "Câu sai là 'Thiết kế cơ sở dữ liệu' vì CSDL là thiết kế mức kiến trúc tổng thể, không phải mức thành phần nhỏ lẻ."
    },
    {
      "id": 417,
      "question": "Đặc điểm nào sau đây được sử dụng để đánh giá một bản thiết kế tốt?",
      "options": [
        "Thể hiện tất cả các yêu cầu trong pha phân tích, cung cấp một mô tả hoàn thiện về phần mềm",
        "Chứa cả các trường hợp kiểm thử của tất cả các thành phần",
        "Mô tả một phần phần mềm",
        "Mô tả chức năng phần mềm"
      ],
      "answer": 0,
      "explanation": "Bản thiết kế tốt phải truyền tải đầy đủ toàn bộ yêu cầu (SRS) thành mô tả chi tiết để lập trình viên có thể code được."
    },
    {
      "id": 418,
      "question": "Hướng tiếp cận nào để những phân tích tác vụ của người dùng trong thiết kế giao diện người dùng",
      "options": [
        "Người dùng cho biết những ưa thích qua bản câu hỏi",
        "Dựa vào ý kiến của những lập trình viên có kinh nghiệm",
        "Nghiên cứu những hệ thống tự động liên quan",
        "Quan sát thao tác người dùng"
      ],
      "answer": 3,
      "explanation": "Để thiết kế giao diện phù hợp với hành vi người dùng, việc quan sát trực tiếp cách họ thao tác là phương pháp thực chứng tốt nhất."
    },
    {
      "id": 419,
      "question": "Một đặc trưng của thiết kế tốt là",
      "options": [
        "Cho thấy sự liên kết mạnh giữa các module",
        "Thực hiện tất cả yêu cầu trong phân tích",
        "Bao gồm những test case cho tất cả thành phần",
        "Kết hợp mã nguồn nhằm mục đích mô tả"
      ],
      "answer": 1,
      "explanation": "Thước đo tiên quyết của thiết kế là phải thỏa mãn (thực hiện) mọi yêu cầu chức năng đã phân tích."
    },
    {
      "id": 420,
      "question": "Mục nào không là đặc trưng chung trong các phương pháp thiết kế",
      "options": [
        "Quản lý cấu hình",
        "Ký hiệu thành phần chức năng",
        "Nguyên tắc đánh giá chất lượng",
        "Heuristic tinh chế"
      ],
      "answer": 0,
      "explanation": "Quản lý cấu hình (Configuration Management) là hoạt động quản lý dự án, không phải là đặc trưng của một phương pháp thiết kế."
    },
    {
      "id": 421,
      "question": "Những câu hỏi có ý nghĩa nhất đối với những người thiết kế giao diện khi được hoàn tất bởi:",
      "options": [
        "Khách hàng",
        "Những lập trình viên có kinh nghiệm",
        "Người dùng sản phẩm",
        "Người quản lý dự án"
      ],
      "answer": 2,
      "explanation": "Do giao diện là cầu nối với người dùng, nên việc đánh giá, kiểm thử thiết kế giao diện phải do chính người dùng sản phẩm quyết định."
    },
    {
      "id": 422,
      "question": "Sơ đồ luồng dữ liệu",
      "options": [
        "Đưa ra hình ảnh quan hệ giữa các đối tượng dữ liệu",
        "Đưa ra hình ảnh những chức năng biến đổi luồng dữ liệu",
        "Chỉ ra những quyết định logic chính khi chúng xuất hiện",
        "Chỉ ra sự tương tác của hệ thống với sự kiện bên ngoài"
      ],
      "answer": 1,
      "explanation": "Sơ đồ DFD (Data Flow Diagram) mô tả cách dữ liệu được luân chuyển và bị biến đổi qua các tiến trình chức năng."
    },
    {
      "id": 423,
      "question": "Tài liệu nào sau đây sẽ được tạo ra trong pha thiết kế hệ thống?",
      "options": [
        "Kế hoạch kiểm thử",
        "Mã lệnh",
        "Thiết kế chi tiết",
        "Lập kế hoạch"
      ],
      "answer": 2,
      "explanation": "Pha thiết kế hệ thống sẽ xuất ra tài liệu Thiết kế chi tiết để chuyển giao cho đội ngũ lập trình (cài đặt)."
    },
    {
      "id": 428,
      "question": "Trong thiết kế cơ sở dữ liệu đâu không phải là quan hệ giữa các bảng",
      "options": [
        "1-1 (một - một)",
        "1-n (một - nhiều)",
        "n-n (nhiều - nhiều)",
        "0-1 (không -một)"
      ],
      "answer": 3,
      "explanation": "Các loại quan hệ CSDL chuẩn là 1-1, 1-nhiều, nhiều-nhiều. Không tồn tại quan hệ 'không-một' (0-1)."
    },
    {
      "id": 429,
      "question": "Trong thiết kế cơ sở dữ liệu đâu không phải là quan hệ giữa các bảng?",
      "options": [
        "1-1 (một - một)",
        "1-n (một - nhiều)",
        "n-n (nhiều - nhiều)",
        "1-0 (một -không)"
      ],
      "answer": 3,
      "explanation": "Tương tự, không tồn tại quan hệ 'một-không' (1-0) trong thiết kế lược đồ quan hệ CSDL."
    },
    {
      "id": 430,
      "question": "Trong thiết kế cơ sở dữ liệu đâu không phải là quan hệ giữa các bảng?",
      "options": [
        "1-1 (một - một)",
        "1-n (một - nhiều)",
        "n-n (nhiều - nhiều)",
        "0-0 (không -không)"
      ],
      "answer": 3,
      "explanation": "Không tồn tại kiểu quan hệ 'không-không' (0-0) trong lý thuyết thiết kế CSDL thực thể - liên kết."
    },
    {
      "id": 431,
      "question": "Khi thiết kế cơ sở dữ liệu, người thiết kế cần tạo quan hệ giữa các bảng để đáp ứng?",
      "options": [
        "Tính ràng buộc dữ liệu",
        "Tính độc lập dữ liệu",
        "Tính dễ dùng",
        "Tính đơn giản hóa"
      ],
      "answer": 0,
      "explanation": "Việc tạo các liên kết (Relationship) giữa các bảng nhằm thiết lập các Ràng buộc toàn vẹn dữ liệu (Referential Integrity)."
    },
    {
      "id": 432,
      "question": "Khi người thiết kế cơ sở dữ liệu cần đặt khóa chính cho mỗi bảng (thực thể) để?",
      "options": [
        "Phân biệt giữa các bản ghi",
        "Nhập bản ghi trùng nhau",
        "Nhập bản ghi rỗng",
        "Nhập sai dữ liệu"
      ],
      "answer": 0,
      "explanation": "Khóa chính (Primary Key) là một hay nhiều cột dùng để định danh tính duy nhất của từng bản ghi, giúp phân biệt chúng."
    },
    {
      "id": 433,
      "question": "Khóa ngoại ở bảng trong cơ sở dữ liệu được hiểu",
      "options": [
        "Như con trỏ trỏ tới khóa chính",
        "Trong quan hệ 0-0",
        "Trong quan hệ 0-1",
        "Trong quan hệ 1-0"
      ],
      "answer": 0,
      "explanation": "Khóa ngoại (Foreign Key) lưu trữ giá trị trỏ đến Khóa chính của bảng khác, đóng vai trò như một con trỏ liên kết."
    },
    {
      "id": 434,
      "question": "Trong làm dự án phần mềm, phần mềm thất bại phần đa ở khâu nào?",
      "options": [
        "Thiết kế",
        "Kiểm thử",
        "Bảo trì",
        "Lập trình"
      ],
      "answer": 0,
      "explanation": "Một thiết kế kiến trúc tồi hoặc sai yêu cầu sẽ làm sụp đổ toàn bộ phần mềm, do đó đây là khâu rủi ro thất bại cao nhất."
    }
  ],
  "4": [
    {
      "id": 1,
      "question": "Một chương trình được cài đặt tốt sẽ đem lại cho ta thuận lợi trong công việc nào?",
      "options": [
        "Bảo trì.",
        "Thiết kế.",
        "Kiểm thử.",
        "Phân tích và thiết kế."
      ],
      "answer": 0,
      "explanation": "Bảo trì phần mềm là giai đoạn chiếm nhiều chi phí nhất. Mã nguồn rõ ràng, cài đặt tốt giúp việc đọc hiểu, sửa lỗi và nâng cấp dễ dàng hơn."
    },
    {
      "id": 2,
      "question": "Phong cách lập trình và các đặc trưng của ngôn ngữ lập trình có ảnh hưởng đến chất lượng của phần mềm không?",
      "options": [
        "Ảnh hưởng lớn đến chất lượng phần mềm",
        "Ảnh hưởng không đáng kể đến chất lượng phần mềm",
        "Không ảnh hưởng gì lắm đến chất lượng phần mềm",
        "Không ảnh hưởng gì đến chất lượng phần mềm"
      ],
      "answer": 0,
      "explanation": "Phong cách lập trình và cách chọn ngôn ngữ ảnh hưởng trực tiếp đến khả năng bảo trì, hiệu năng và chất lượng tổng thể của phần mềm."
    },
    {
      "id": 3,
      "question": "Phong cách lập trình nào được xem là tốt?",
      "options": [
        "Sử dụng nhiều kỹ thuật nâng cao của các ngôn ngữ lập trình hiện đại nhất",
        "Sử dụng các câu lệnh theo thói quen của bản thân không cần quan tâm đến cấu trúc đơn giản hay phức tạp miễn sao giải quyết được công việc là được",
        "Sử dụng các câu lệnh đơn giản, ngắn gọn, dễ hiểu và hiệu quả.",
        "Sử dụng các câu lệnh phức tạp chứng tỏ được khả năng am hiểu ngôn ngữ lập trình của lập trình viên."
      ],
      "answer": 2,
      "explanation": "Phong cách lập trình tốt đề cao tính đơn giản, dễ đọc và dễ bảo trì thay vì dùng các cú pháp quá phức tạp gây khó hiểu."
    },
    {
      "id": 4,
      "question": "Thứ tự khai báo dữ liệu nên được chuẩn hoá cho dù ngôn ngữ lập trình không có yêu cầu bắt buộc. Điều này tạo điều kiện thuận lợi cho công việc nào:",
      "options": [
        "Kiểm thử, gỡ rối và bảo trì",
        "Phân tích, thiết kế và cài đặt",
        "Thiết kế và cài đặt và bảo trì",
        "Cài đặt và bảo trì"
      ],
      "answer": 0,
      "explanation": "Chuẩn hóa quy tắc khai báo biến giúp lập trình viên dễ dàng tìm kiếm, theo dõi luồng dữ liệu, hỗ trợ tốt cho kiểm thử và gỡ lỗi."
    },
    {
      "id": 5,
      "question": "Việc xây dựng các câu lệnh của chương trình nên tuân theo phong cách lập trình nào:",
      "options": [
        "Lập trình cấu trúc",
        "Lập trình hướng đối tượng",
        "Lập trình logic",
        "Lập trình mạng"
      ],
      "answer": 0,
      "explanation": "Lập trình cấu trúc (Structured Programming) với 3 cấu trúc cơ bản (tuần tự, rẽ nhánh, lặp) giúp mã nguồn mạch lạc và dễ kiểm soát luồng điều khiển."
    },
    {
      "id": 6,
      "question": "Trong thể hiện chương trình, cách xây dựng câu lệnh đơn không nhất thiết phải tuân theo các chỉ dẫn nào?",
      "options": [
        "Tránh dùng các phép kiểm tra điều kiện phức tạp",
        "Khử bỏ các phép kiểm tra điều kiện phủ định",
        "Tránh lồng nhau giữa các điều kiện hay chu trình",
        "Tránh sử dụng lại các đoạn chương trình giống nhau"
      ],
      "answer": 3,
      "explanation": "Việc sử dụng lại (reuse) các đoạn chương trình giống nhau là một thực tiễn tốt (best practice) nên được khuyến khích, chứ không phải cần tránh."
    },
    {
      "id": 7,
      "question": "Các ngôn ngữ thế hệ thứ nhất: là các chương trình được viết theo mã máy hoặc hợp ngữ. Sử dụng các ngôn ngữ này có lợi thế gì:",
      "options": [
        "Dễ hiểu, dễ lập trình",
        "Chương trình ngắn gọn, dễ hiểu",
        "Giải quyết nhanh các bài toán phức tạp",
        "Tốc độ xử lý chương trình nhanh, cấu hình phần cứng đơn giản"
      ],
      "answer": 3,
      "explanation": "Ngôn ngữ thế hệ 1 (mã máy) giao tiếp trực tiếp với CPU, không qua biên dịch/phiên dịch nên cho tốc độ thực thi nhanh nhất."
    },
    {
      "id": 8,
      "question": "Các ngôn ngữ thế hệ thứ hai: được phát triển từ cuối những năm 1950 đến đầu những năm 1960, như FORTRAN, COBOL, ALGOL, BASIC,... Nó được xem là nền tảng cho mọi ngôn ngữ lập trình hiện đại - thế hệ thứ ba. Đặc trưng của các ngôn ngữ thế hệ thứ 2 là:",
      "options": [
        "Các ngôn ngữ thế hệ thứ hai được đặc trưng bởi việc sử dụng rộng rãi thư viện phần mềm khổng lồ và nó cũng đã được chấp nhận rộng rãi",
        "Các ngôn ngữ thế hệ thứ hai được đặc trưng khả năng cấu trúc dữ liệu và thủ tục mạnh",
        "Các ngôn ngữ thế hệ thứ hai được đặc trưng bởi việc sử dụng hợp ngữ và ngôn ngữ máy",
        "Các ngôn ngữ thế hệ thứ hai được đặc trưng bởi việc biểu thị các cấu trúc dữ liệu ở mức độ trừu tượng cao hơn bằng cách xoá bỏ yêu cầu xác định chi tiết thuật toán"
      ],
      "answer": 0,
      "explanation": "Đặc trưng của thế hệ 2 là sự xuất hiện của các thư viện phần mềm dùng chung và việc nó được chấp nhận rộng rãi trong tính toán khoa học/thương mại."
    },
    {
      "id": 9,
      "question": "Các ngôn ngữ thế hệ thứ tư như ngôn ngữ vấn đáp, ngôn ngữ hỗ trợ quyết định, ngôn ngữ làm bản mẫu,...Đặc trưng của các ngôn ngữ thế hệ thứ tư là:",
      "options": [
        "Biểu thị các cấu trúc dữ liệu ở mức độ trừu tượng cao hơn bằng cách xoá bỏ yêu cầu xác định chi tiết thuật toán",
        "Khả năng cấu trúc dữ liệu và thủ tục mạnh",
        "Sử dụng rộng rãi thư viện phần mềm khổng lồ",
        "Được viết bằng ngôn ngữ máy và hợp ngữ"
      ],
      "answer": 0,
      "explanation": "Ngôn ngữ thế hệ thứ 4 (4GL) hướng tới việc khai báo 'làm cái gì' thay vì 'làm như thế nào', ẩn đi chi tiết thuật toán phức tạp."
    },
    {
      "id": 10,
      "question": "Ngôn ngữ cài đặt SQL là thuộc loại:",
      "options": [
        "Ngôn ngữ hỏi đáp trong lĩnh vực cơ sở dữ liệu",
        "Ngôn ngữ lập trình theo phong cách cấu trúc",
        "Ngôn ngữ lập trình theo phong cách hướng đối tượng",
        "Ngôn ngữ lập trình theo phong cách logic"
      ],
      "answer": 0,
      "explanation": "SQL (Structured Query Language) là ngôn ngữ hỏi đáp, khai báo để thao tác với Cơ sở dữ liệu."
    },
    {
      "id": 11,
      "question": "Ngôn ngữ lập trình C++ thuộc loại:",
      "options": [
        "Ngôn ngữ lập trình theo phong cách cấu trúc và logic",
        "Ngôn ngữ lập trình theo phong cách logic",
        "Ngôn ngữ lập trình theo phong cách hướng đối tượng",
        "Ngôn ngữ lập trình lai: vừa theo phong cách cấu trúc vừa theo phong cách hướng đối tượng"
      ],
      "answer": 3,
      "explanation": "C++ là ngôn ngữ đa hình thức (multi-paradigm), hỗ trợ cả lập trình hướng thủ tục/cấu trúc (từ C) và lập trình hướng đối tượng."
    },
    {
      "id": 12,
      "question": "Ngôn ngữ lập trình Prolog thuộc loại:",
      "options": [
        "Ngôn ngữ lập trình hướng cơ sở dữ liệu",
        "Ngôn ngữ lập trình hướng đối tượng",
        "Ngôn ngữ lập trình Logic",
        "Ngôn ngữ lập trình cấu trúc"
      ],
      "answer": 2,
      "explanation": "Prolog là ngôn ngữ lập trình theo hướng logic (Logic Programming), chủ yếu dùng cho AI và hệ chuyên gia."
    },
    {
      "id": 13,
      "question": "Ngôn ngữ lập trình hướng đối tượng có phần mở rộng là:",
      "options": [
        "*.c",
        "*.pas",
        "*.doc",
        "*.cpp"
      ],
      "answer": 3,
      "explanation": "*.cpp là phần mở rộng đặc trưng của file mã nguồn C++ (ngôn ngữ hướng đối tượng)."
    },
    {
      "id": 14,
      "question": "Phần mở rộng *.CPP là của ngôn ngữ lập trình nào?",
      "options": [
        "C#",
        "Pascal",
        "Hướng đối tượng",
        "Cobol"
      ],
      "answer": 2,
      "explanation": "Trong các lựa chọn, *.cpp đại diện cho C++ là một ngôn ngữ lập trình Hướng đối tượng tiêu biểu."
    },
    {
      "id": 15,
      "question": "Ngôn ngữ nào được sử dụng trong lĩnh vực trí tuệ nhân tạo?",
      "options": [
        "C#",
        "PROLOG(Programming Logic)",
        "C++",
        "Java"
      ],
      "answer": 1,
      "explanation": "PROLOG được sinh ra dành riêng cho việc suy luận logic và giải quyết các bài toán Trí tuệ nhân tạo (AI)."
    },
    {
      "id": 16,
      "question": "Phương pháp lập trình nào có đặc trưng cơ bản sau: Tính đơn thể, cấu trúc điều khiển và tính vào/ra đơn.",
      "options": [
        "Lập trình cấu trúc",
        "Lập trình hướng đối tượng",
        "Lập trình hướng sự kiện",
        "Lập trình nhúng"
      ],
      "answer": 0,
      "explanation": "Lập trình cấu trúc nổi bật với tính đơn thể và nguyên tắc '1 lối vào, 1 lối ra' cho mỗi khối lệnh."
    },
    {
      "id": 17,
      "question": "Phương pháp lập trình nào cho phép lập trình viên tạo ra các đối tượng, một phương pháp kết hợp cả dữ liệu và các câu lệnh của chương trình.",
      "options": [
        "Lập trình cấu trúc",
        "Lập trình hướng đối tượng",
        "Lập trình hướng sự kiện",
        "Lập trình nhúng"
      ],
      "answer": 1,
      "explanation": "Lập trình hướng đối tượng (OOP) đóng gói cả dữ liệu (thuộc tính) và các hàm xử lý (phương thức) vào trong một đối tượng."
    },
    {
      "id": 18,
      "question": "Muốn phát triển ứng dụng web thì chọn ngôn ngữ lập trình nào trong các ngôn ngữ dưới đây?",
      "options": [
        "Lập trình PHP",
        "Lập trình C",
        "Lập trình hướng đối tượng",
        "Lập trình assembly"
      ],
      "answer": 0,
      "explanation": "PHP là ngôn ngữ kịch bản chạy trên máy chủ, được thiết kế đặc biệt cho việc phát triển các ứng dụng Web."
    },
    {
      "id": 19,
      "question": "Đâu là ngôn ngữ truy vấn cơ sở dữ liệu?",
      "options": [
        "Cobol",
        "Aps.net",
        "Java",
        "SQL"
      ],
      "answer": 3,
      "explanation": "SQL là chuẩn ngôn ngữ công nghiệp chuyên biệt dùng để truy vấn và thao tác trên cơ sở dữ liệu quan hệ."
    },
    {
      "id": 20,
      "question": "Ngôn ngữ nào xử lý kiểu ứng dụng theo Lô?",
      "options": [
        "C",
        "Pascal",
        "Fortan",
        "SQL"
      ],
      "answer": 3,
      "explanation": "Theo bảng đối chiếu trong giáo trình, SQL (và một số ngôn ngữ như COBOL) hỗ trợ xử lý kiểu ứng dụng theo lô (Batch processing)."
    },
    {
      "id": 21,
      "question": "Hạn chế biểu diễn thuật toán bằng ngôn ngữ tự nhiên là:",
      "options": [
        "Tính rườm rà, dễ nhiểu nhầm ý nhau",
        "Ngắn gọn",
        "Khoa học",
        "Phù hợp thuật toán phức tạp"
      ],
      "answer": 0,
      "explanation": "Ngôn ngữ tự nhiên có tính đa nghĩa, rườm rà nên rất dễ gây hiểu nhầm nếu dùng để biểu diễn các bước thuật toán chính xác."
    },
    {
      "id": 22,
      "question": "Điểm trung bình của sinh viên cần khai báo kiểu dữ liệu trong ngôn ngữ lập trình là:",
      "options": [
        "Chuỗi",
        "Logic",
        "Số nguyên",
        "Số thực"
      ],
      "answer": 3,
      "explanation": "Điểm trung bình (ví dụ 7.5, 8.2) là giá trị thập phân nên cần lưu trữ ở kiểu Số thực (Float/Double)."
    },
    {
      "id": 23,
      "question": "Tuổi thọ của con người cần khai báo kiểu dữ liệu trong ngôn ngữ lập trình là:",
      "options": [
        "Chuỗi",
        "Logic",
        "Số nguyên",
        "Số thực"
      ],
      "answer": 2,
      "explanation": "Tuổi thọ là số nguyên dương (ví dụ 25, 60), không có phần thập phân nên kiểu Số nguyên là phù hợp nhất."
    },
    {
      "id": 24,
      "question": "Trong lập trình tối ưu về không gian nghĩa là gì?",
      "options": [
        "Tiêt kiệm bộ nhớ",
        "Tốc độ nhanh",
        "Tiết kiệm thời gian",
        "Tiết kiệm chi phí"
      ],
      "answer": 0,
      "explanation": "Trong đánh giá thuật toán, tối ưu 'không gian' (Space Complexity) nghĩa là sử dụng càng ít bộ nhớ RAM càng tốt."
    },
    {
      "id": 25,
      "question": "Việc lựa chọn ngôn ngữ lập trình phải xem ngôn ngữ lập trình đó có phù hợp với kiểu ứng dụng hay không và xem nó có phù hợp với việc dùng để phát triển ứng dụng. Ngôn ngữ lập trình nào không phù hợp với kiểu ứng dụng theo lô?",
      "options": [
        "SQL",
        "Basic",
        "Cobol",
        "C"
      ],
      "answer": 3,
      "explanation": "Dựa vào bảng tiêu chí ứng dụng, C không đánh dấu phù hợp cho kiểu ứng dụng chạy theo lô."
    },
    {
      "id": 26,
      "question": "Việc lựa chọn ngôn ngữ lập trình phải xem ngôn ngữ lập trình đó có phù hợp với kiểu ứng dụng hay không và xem nó có phù hợp với việc dùng để phát triển ứng dụng. Ngôn ngữ lập trình nào không phù hợp với kiểu ứng dụng trực tuyến?",
      "options": [
        "SQL",
        "Basic",
        "Prolog",
        "Ada"
      ],
      "answer": 2,
      "explanation": "Theo bảng tiêu chí của giáo trình, Prolog không hỗ trợ mạnh mẽ cho các ứng dụng trực tuyến (Online applications)."
    },
    {
      "id": 27,
      "question": "Việc lựa chọn ngôn ngữ lập trình phải xem ngôn ngữ lập trình đó có phù hợp với kiểu ứng dụng hay không và xem nó có phù hợp với việc dùng để phát triển ứng dụng. Ngôn ngữ lập trình nào không phù hợp với kiểu ứng dụng hỏi đáp Cơ sở dữ liệu?",
      "options": [
        "SQL",
        "Focus",
        "Prolog",
        "Ada"
      ],
      "answer": 2,
      "explanation": "Prolog hướng tới suy diễn logic, không phải ngôn ngữ tối ưu cho các bài toán truy vấn CSDL thông thường như SQL hay Focus."
    },
    {
      "id": 28,
      "question": "Việc lựa chọn ngôn ngữ lập trình phải xem ngôn ngữ lập trình đó có phù hợp với kiểu ứng dụng hay không và xem nó có phù hợp với việc dùng để phát triển ứng dụng. Ngôn ngữ lập trình nào không phù hợp với kiểu ứng dụng hỗ trợ quyết định?",
      "options": [
        "Ada",
        "Focus",
        "Cobol",
        "Prolog"
      ],
      "answer": 2,
      "explanation": "Cobol chuyên cho xử lý số liệu thương mại, không phù hợp cho các hệ thống Hệ chuyên gia hay Hỗ trợ quyết định (DSS)."
    },
    {
      "id": 29,
      "question": "Việc lựa chọn ngôn ngữ lập trình phải xem ngôn ngữ lập trình đó có phù hợp với kiểu ứng dụng hay không và xem nó có phù hợp với việc dùng để phát triển ứng dụng. Ngôn ngữ lập trình nào phù hợp với kiểu ứng dụng EIS?",
      "options": [
        "Pascal",
        "Prolog",
        "C",
        "SQL"
      ],
      "answer": 2,
      "explanation": "Theo bảng tiêu chí giáo trình, C có thể được sử dụng trong các hệ thống thông tin điều hành (EIS)."
    },
    {
      "id": 30,
      "question": "Trong lập trình đâu là đại lượng có giá trị thay đổi?",
      "options": [
        "Biến",
        "Hằng",
        "Giá trị số",
        "Giá trị chuỗi"
      ],
      "answer": 0,
      "explanation": "Biến (Variable) là một ô nhớ có tên, dùng để lưu trữ dữ liệu và giá trị của nó có thể thay đổi trong lúc chạy."
    },
    {
      "id": 31,
      "question": "Tính chất nào dưới đây mà ngôn ngữ lập trình hướng đối tượng không có?",
      "options": [
        "Tính kế thừa",
        "Tính đa kế thừa",
        "Tính đa hình",
        "Tính logic"
      ],
      "answer": 3,
      "explanation": "Tính kế thừa, đa hình và đóng gói là đặc trưng của OOP. 'Tính logic' thuộc về phương pháp lập trình logic (như Prolog)."
    },
    {
      "id": 32,
      "question": "Đâu là phần mở rộng ngôn ngữ lập trình web động?",
      "options": [
        "*.Jsp",
        "*.C",
        "*.bmp",
        "*.CPP"
      ],
      "answer": 0,
      "explanation": "*.jsp (JavaServer Pages) là phần mở rộng của trang web động được xây dựng dựa trên công nghệ Java."
    },
    {
      "id": 33,
      "question": "Trong khai báo lớp(class) của lập trình hướng đối tượng gồm có:",
      "options": [
        "Thuộc tính, phương thức",
        "Văn bản",
        "Các thẻ",
        "Các chú thích"
      ],
      "answer": 0,
      "explanation": "Một lớp (Class) trong OOP luôn bao gồm hai thành phần cơ bản: Thuộc tính (dữ liệu) và Phương thức (hành vi)."
    },
    {
      "id": 34,
      "question": "Thuộc tính biểu diễn trong lập trình hướng đối lượng là:",
      "options": [
        "Hàm",
        "Biến, hằng",
        "Phương thức",
        "Kế thừa"
      ],
      "answer": 1,
      "explanation": "Thuộc tính (Attribute/Property) dùng để lưu trữ trạng thái của đối tượng, được cài đặt thông qua các Biến hoặc Hằng."
    },
    {
      "id": 35,
      "question": "Dòng chú thích trong lập trình để:",
      "options": [
        "Giải thích một vấn đề trong chương trình",
        "Sinh mã khi chạy",
        "Dùng kết quả để lập trình",
        "Vô hiệu hóa chương trình"
      ],
      "answer": 0,
      "explanation": "Chú thích (Comment) bị trình biên dịch bỏ qua, tác dụng duy nhất là để con người đọc hiểu và giải thích mã nguồn."
    },
    {
      "id": 36,
      "question": "Công ty muốn viết phần mềm quản lý sách. Theo bạn định hướng dùng loại ngôn ngữ lập trình nào?",
      "options": [
        "Lập trình hệ thống",
        "Lập trình ngôn ngữ máy",
        "Lập trình hướng cơ sở dữ liệu",
        "Lập trình nhúng"
      ],
      "answer": 2,
      "explanation": "Phần mềm quản lý sách đòi hỏi việc lưu trữ, tìm kiếm và truy xuất thông tin lớn, do đó nên dùng lập trình hướng Cơ sở dữ liệu."
    },
    {
      "id": 37,
      "question": "Độ phức tạp và việc tổ chức cấu trúc dữ liệu được xác định trong bước nào:",
      "options": [
        "Xác định yêu cầu phần mềm",
        "Thiết kế phần mềm",
        "Cài đặt phần mềm",
        "Bảo trì phần mềm"
      ],
      "answer": 1,
      "explanation": "Giai đoạn thiết kế phần mềm sẽ chốt phương án về kiến trúc, tổ chức dữ liệu và đánh giá độ phức tạp của thuật toán."
    },
    {
      "id": 38,
      "question": "Phong cách khai báo dữ liệu được thiết lập khi nào:",
      "options": [
        "Chương trình được sinh ra",
        "Thiết kế phần mềm",
        "Xác định yêu cầu phần mềm",
        "Bảo trì phần mềm"
      ],
      "answer": 0,
      "explanation": "Phong cách khai báo biến, định dạng mã nguồn được thiết lập ở khâu 'Chương trình được sinh ra' (giai đoạn Coding/Cài đặt)."
    },
    {
      "id": 39,
      "question": "Các ngôn ngữ lập trình có những loại dữ liệu nào:",
      "options": [
        "Dữ liệu toàn cục và không có dữ liệu cục bộ",
        "Dữ liệu cục bộ và không có dữ liệu toàn cục",
        "Dữ liệu toàn cục và dữ liệu cục bộ",
        "Dữ liệu địa phương và tham biến"
      ],
      "answer": 2,
      "explanation": "Tầm vực của dữ liệu thường được chia làm hai loại chính: Toàn cục (Global - dùng chung) và Cục bộ (Local - nội bộ hàm)."
    },
    {
      "id": 62,
      "question": "Việc cấp phát bộ nhớ được chỉ được diễn ra khi cần thiết là loại cấp phát bộ nhớ nào:",
      "options": [
        "Cấp phát bộ nhớ tĩnh",
        "Cấp phát bộ nhớ động",
        "Cấp phát bộ nhớ chính",
        "Cấp phát bộ nhớ phụ"
      ],
      "answer": 1,
      "explanation": "Bộ nhớ động (dynamic memory) được cấp phát thông qua các con trỏ ngay tại thời điểm chạy (runtime) khi thực sự cần thiết."
    },
    {
      "id": 40,
      "question": "Cách thức cài đặt vào/ra có ảnh hưởng chủ yếu đến ai?",
      "options": [
        "Người sử dụng hệ thống",
        "Lập trình viên",
        "Người kiểm thử phần mềm",
        "Người bảo trì phần mềm"
      ],
      "answer": 0,
      "explanation": "Giao diện Vào/Ra (I/O) là cách mà chương trình tương tác với thế giới bên ngoài, do đó ảnh hưởng trực tiếp đến trải nghiệm người dùng."
    },
    {
      "id": 41,
      "question": "Kiểu dữ liệu tự định nghĩa là kiểu dữ liệu do lập trình viên định nghĩa và có giá trị trong phạm vi nào:",
      "options": [
        "Một chương trình con",
        "Mọi ứng dụng",
        "Mọi chương trình",
        "Một chương trình hoặc một ứng dụng nhất định"
      ],
      "answer": 3,
      "explanation": "Kiểu dữ liệu tự định nghĩa (User-defined type) thường chỉ có phạm vi sử dụng và ý nghĩa trong khuôn khổ của một ứng dụng cụ thể."
    },
    {
      "id": 42,
      "question": "Tính độ phức tạp của thuật toán trong đoạn giải thuật sau: s = 1; p = 1; for (i=1;i<=n;i++) { p = p * x / i; s = s + p; }",
      "options": [
        "Độ phức tạp của thuật toán là O(n)",
        "Độ phức tạp của thuật toán là O(1)",
        "Độ phức tạp của thuật toán là O(n2)",
        "Độ phức tạp của thuật toán là O(n3)"
      ],
      "answer": 0,
      "explanation": "Chương trình có 1 vòng lặp for chạy từ 1 tới n, mỗi lần lặp thực hiện phép tính O(1) -> Tổng độ phức tạp là O(n)."
    },
    {
      "id": 43,
      "question": "Tính độ phức tạp của thuật toán trong đoạn giải thuật sau: s=n*(n-1) /2;",
      "options": [
        "Độ phức tạp của thuật toán là O(n)",
        "Độ phức tạp của thuật toán là O(1)",
        "Độ phức tạp của thuật toán là O(n2)",
        "Độ phức tạp của thuật toán là O(n3)"
      ],
      "answer": 1,
      "explanation": "Không có vòng lặp, chỉ có biểu thức toán học tính một lần duy nhất, độ phức tạp là hằng số O(1)."
    },
    {
      "id": 44,
      "question": "Tính độ phức tạp của thuật toán trong đoạn giải thuật sau: for (i= 1;i<=n;i++) for (j= 1;j<=m;j++)",
      "options": [
        "Độ phức tạp của thuật toán là O(n)",
        "Độ phức tạp của thuật toán là O(1)",
        "Độ phức tạp của thuật toán là O(n3)",
        "Độ phức tạp của thuật toán là O(n*m)"
      ],
      "answer": 3,
      "explanation": "Hai vòng lặp for lồng nhau: vòng ngoài n lần, vòng trong m lần -> Số lần chạy là n * m -> Độ phức tạp O(n*m)."
    },
    {
      "id": 45,
      "question": "Tính độ phức tạp của thuật toán trong đoạn giải thuật sau: s= 5*(a+b)2",
      "options": [
        "Độ phức tạp của thuật toán là O(n)",
        "Độ phức tạp của thuật toán là O(1)",
        "Độ phức tạp của thuật toán là O(n2)",
        "Độ phức tạp của thuật toán là O(n3)"
      ],
      "answer": 1,
      "explanation": "Biểu thức tính toán toán học độc lập không có vòng lặp, độ phức tạp là O(1)."
    },
    {
      "id": 46,
      "question": "Tính độ phức tạp của thuật toán trong đoạn giải thuật sau: for (i= 1;i<=n;i++) for (j= 1;j<=n;j++) for (k= 1;k<=n;k++)",
      "options": [
        "Độ phức tạp của thuật toán là O(n)",
        "Độ phức tạp của thuật toán là O(1)",
        "Độ phức tạp của thuật toán là O(n3)",
        "Độ phức tạp của thuật toán là O(n2)"
      ],
      "answer": 2,
      "explanation": "Ba vòng lặp lồng nhau, mỗi vòng lặp n lần -> Tổng số bước n * n * n = n^3 -> Độ phức tạp O(n^3)."
    },
    {
      "id": 47,
      "question": "Tính độ phức tạp của thuật toán trong đoạn giải thuật sau: a = 2; b = 3; for (i=0;i<n;i++) { a = a * i; b = b + a; }",
      "options": [
        "Độ phức tạp của thuật toán là O(1)",
        "Độ phức tạp của thuật toán là O(n)",
        "Độ phức tạp của thuật toán là O(n2)",
        "Độ phức tạp của thuật toán là O(n3)"
      ],
      "answer": 1,
      "explanation": "Chỉ có một vòng lặp đơn for chạy n lần -> Độ phức tạp tuyến tính O(n)."
    },
    {
      "id": 48,
      "question": "Tính độ phức tạp của thuật toán trong đoạn giải thuật sau: a = 5; for (x = 0; x< n; x++) for (y = 0; y< n; y ++) a = a * x + y;",
      "options": [
        "Độ phức tạp của thuật toán là O(1)",
        "Độ phức tạp của thuật toán là O(n)",
        "Độ phức tạp của thuật toán là O(n2)",
        "Độ phức tạp của thuật toán là O(n3)"
      ],
      "answer": 2,
      "explanation": "Hai vòng lặp lồng nhau đều chạy n lần -> Độ phức tạp O(n^2)."
    },
    {
      "id": 49,
      "question": "Tính độ phức tạp của thuật toán trong đoạn giải thuật sau: x = 0; for (i = 1; i <= n; i ++) for (j = 1;j <= n; j ++) x ++;",
      "options": [
        "Độ phức tạp của thuật toán là O(n)",
        "Độ phức tạp của thuật toán là O(1)",
        "Độ phức tạp của thuật toán là O(n2)",
        "Độ phức tạp của thuật toán là O(n3)"
      ],
      "answer": 2,
      "explanation": "Hai vòng lặp lồng nhau chạy n lần, lệnh x++ tốn O(1) -> Độ phức tạp O(n^2)."
    },
    {
      "id": 50,
      "question": "Tính độ phức tạp của thuật toán trong đoạn giải thuật sau: Q = 20 / (a * b) + c;",
      "options": [
        "Độ phức tạp của thuật toán là O(1)",
        "Độ phức tạp của thuật toán là O(n)",
        "Độ phức tạp của thuật toán là O(n2)",
        "Độ phức tạp của thuật toán là O(n3)"
      ],
      "answer": 0,
      "explanation": "Đây chỉ là một lệnh gán thực hiện tính toán cơ bản, chạy đúng 1 lần -> Độ phức tạp O(1)."
    },
    {
      "id": 51,
      "question": "Tính độ phức tạp của thuật toán trong đoạn giải thuật sau: R = 100 mod (a/b)2;",
      "options": [
        "Độ phức tạp của thuật toán là O(1)",
        "Độ phức tạp của thuật toán là O(n)",
        "Độ phức tạp của thuật toán là O(n2)",
        "Độ phức tạp của thuật toán là O(n3)"
      ],
      "answer": 0,
      "explanation": "Lệnh tính mod và lũy thừa chạy đúng 1 lần không lặp -> Độ phức tạp O(1)."
    },
    {
      "id": 52,
      "question": "Tính độ phức tạp của thuật toán trong đoạn giải thuật sau: P = 0; Q = 0; for (i = 1;i <= n; i ++) for (j = 0; j < n; j ++) for (k = 1; k <= n; k ++) { P ++; Q --; }",
      "options": [
        "Độ phức tạp của thuật toán là O(1)",
        "Độ phức tạp của thuật toán là O(n)",
        "Độ phức tạp của thuật toán là O(n2)",
        "Độ phức tạp của thuật toán là O(n3)"
      ],
      "answer": 3,
      "explanation": "Ba vòng lặp lồng nhau, mỗi vòng chạy n lần -> Độ phức tạp O(n^3)."
    },
    {
      "id": 53,
      "question": "Tính độ phức tạp của thuật toán trong đoạn giải thuật sau: P = 1000; Q = 0; for (i = 1;i <= n; i ++) for (j = 0; j < n; j ++) for (k = 1; k <= n; k ++) { P -= P; Q += Q; }",
      "options": [
        "Độ phức tạp của thuật toán là O(1)",
        "Độ phức tạp của thuật toán là O(n)",
        "Độ phức tạp của thuật toán là O(n2)",
        "Độ phức tạp của thuật toán là O(n3)"
      ],
      "answer": 3,
      "explanation": "Tương tự, 3 vòng lặp lồng nhau chạy tối đa n lần mỗi vòng -> Độ phức tạp O(n^3)."
    },
    {
      "id": 54,
      "question": "Tính độ phức tạp của thuật toán trong đoạn giải thuật sau: X = 5; Y = 100; for (i = 1;i <= n;i ++) for (j = 1;j <= m; j ++) { X = X + i; Y = Y - j; }",
      "options": [
        "Độ phức tạp của thuật toán là O(1)",
        "Độ phức tạp của thuật toán là O(n)",
        "Độ phức tạp của thuật toán là O(n3)",
        "Độ phức tạp của thuật toán là O(n * m)"
      ],
      "answer": 3,
      "explanation": "Hai vòng lặp lồng nhau, vòng ngoài chạy n lần, vòng trong chạy m lần -> O(n*m)."
    },
    {
      "id": 55,
      "question": "Tính độ phức tạp của thuật toán trong đoạn giải thuật sau: X = 0; Y = 10; for (i = 1;i <= n;i ++) for (j = 1;j <= m; j ++) { X = X + 5 * i; Y = Y / j + 2; }",
      "options": [
        "Độ phức tạp của thuật toán là O(1)",
        "Độ phức tạp của thuật toán là O(n)",
        "Độ phức tạp của thuật toán là O(n*m)",
        "Độ phức tạp của thuật toán là O(n3)"
      ],
      "answer": 2,
      "explanation": "Hai vòng lặp lồng nhau chạy n và m lần -> O(n*m)."
    },
    {
      "id": 56,
      "question": "Chương trình P là một bộ biến đổi tuần tự P để chuyển cái vào x thành ra cái y trong đó:",
      "options": [
        "x và y hoàn toàn được xác định trước",
        "x được xác định trước, y chưa được xác định trước",
        "x chưa được xác định trước, y được xác định trước",
        "x và y hoàn toàn chưa được xác định"
      ],
      "answer": 0,
      "explanation": "Định nghĩa chương trình tuần tự là biến đổi x thành y, trong đó cả x và y đã được xác định trước."
    },
    {
      "id": 57,
      "question": "Điều kiện để có mệnh đề B sau khi thực hiện lệnh gán x: = E (với E là một biểu thức) từ mệnh đề {A} thì trước đó ta phải có {A} suy dẫn được ra {B[x|E]} là nội dung của tiên đề nào:",
      "options": [
        "Tiên đề tuần tự",
        "Tiên đề gán",
        "Tiên đề rẽ nhánh",
        "Tiên đề lặp"
      ],
      "answer": 1,
      "explanation": "Đây là phát biểu mô tả Tiên đề gán (Assignment Axiom) trong logic Hoare."
    },
    {
      "id": 58,
      "question": "Với mệnh đề dữ liệu vào {A}, mệnh đề dữ liệu ra {B}, biểu thức logic E, và các đoạn chương trình P, Q. Nếu ta có {A, E}P{B} và {A,!E}Q{B} thì ta nói rằng mệnh đề {A} và {B} tuân theo cấu trúc rẽ nhánh dạng đủ với cấu trúc P, Q và điều kiện lựa chọn E; tức là: {A} if E then P else Q; {B} là nội dung của tiên đề nào:",
      "options": [
        "Tiên đề tuần tự",
        "Tiên đề gán",
        "Tiên đề rẽ nhánh",
        "Tiên đề lặp"
      ],
      "answer": 2,
      "explanation": "If-then-else là cấu trúc rẽ nhánh, nên đây là nội dung của Tiên đề rẽ nhánh (Conditional Axiom)."
    },
    {
      "id": 59,
      "question": "Cho mệnh đề dữ liệu vào {A}, biểu thức logic E và đoạn trình P. Nếu mệnh đề {A} tuân theo cấu trúc lặp P với điều kiện lặp E thì mệnh đề {A} sẽ bất biến đối với P trong điều kiện E, tức là {A,E}P{A}, kết thúc vòng lặp ta có mệnh đề {A,!E}. Lúc này ta viết: {A} while E do P; {A,!E} là nội dung của tiên đề nào:",
      "options": [
        "Tiên đề tuần tự",
        "Tiên đề gán",
        "Tiên đề rẽ nhánh",
        "Tiên đề lặp"
      ],
      "answer": 3,
      "explanation": "Cấu trúc While-Do phụ thuộc vào bất biến vòng lặp, được định nghĩa bởi Tiên đề lặp (Loop Axiom)."
    },
    {
      "id": 60,
      "question": "Cho mệnh đề dữ liệu vào {A} và đoạn chương trình P. Nếu ta có {A}P{A} thì ta nói rằng tính chất dữ liệu của mệnh đề {A} không thay đổi khi chịu sự tác động của đoạn chương trình P và lúc này người ta nói rằng mệnh đề {A} là bất biến đối với P, tức ta có: {A}P {A} là nội dung của tiên đề nào:",
      "options": [
        "Tiên đề tuần tự",
        "Tiên đề gán",
        "Tiên đề rẽ nhánh",
        "Tiên đề về tính bất biến của chương trình"
      ],
      "answer": 3,
      "explanation": "Khi trạng thái {A} không đổi sau đoạn P, P được gọi là bất biến đối với A. Đây là Tiên đề bất biến (Invariance Axiom)."
    },
    {
      "id": 61,
      "question": "\"Hệ thống lên kế hoạch, xem xét, đánh giá trên toàn bộ quy trình phát triển sản phẩm\" được gọi tắt là:",
      "options": [
        "QC",
        "QA",
        "QE",
        "QI"
      ],
      "answer": 1,
      "explanation": "QA (Quality Assurance) đánh giá và đảm bảo chất lượng trên toàn bộ quy trình, phân biệt với QC chỉ tập trung vào kiểm tra sản phẩm cuối."
    }
  ],
  "5": [
    {
      "id": 1,
      "question": "Kiểm tra chất lượng phần mềm là một hoạt động khó được chấp nhận đối với ai vì nó tốn kém, mất thời gian và hiếm khi phát hiện được lỗi?",
      "options": [
        "Khách hàng",
        "Chuyên gia kỹ thuật",
        "Nhà quản lý",
        "Lập trình viên"
      ],
      "answer": 3,
      "explanation": "Kiểm thử phần mềm thường tốn kém, nhàm chán và hiếm khi được các lập trình viên hoan nghênh."
    },
    {
      "id": 2,
      "question": "Khi phân tích chất lượng, phần mềm gặp lỗi chiến lược là loại lỗi nào:",
      "options": [
        "Ý đồ thiết kế sai.",
        "Lỗi được truyền từ chương trình này sang chương trình khác",
        "Lỗi viết sai quy định của ngôn ngữ",
        "Lỗi xảy ra khi một đơn vị chương trình làm thay đổi giá trị của một biến ngoài ý kiến của lập trình viên"
      ],
      "answer": 0,
      "explanation": "Lỗi chiến lược (strategic error) là những sai sót nghiêm trọng do hiểu sai yêu cầu hoặc ý đồ thiết kế sai ngay từ đầu."
    },
    {
      "id": 3,
      "question": "Khi phân tích chất lượng, phần mềm gặp lỗi cú pháp là loại lỗi nào",
      "options": [
        "Ý đồ thiết kế sai",
        "Lỗi được truyền từ chương trình này sang chương trình khác",
        "Lỗi viết sai quy định của ngôn ngữ",
        "Lỗi xảy ra khi một đơn vị chương trình làm thay đổi giá trị của một biến ngoài ý kiến của lập trình viên"
      ],
      "answer": 2,
      "explanation": "Lỗi cú pháp (syntax error) là lỗi vi phạm quy tắc ngữ pháp của ngôn ngữ, thường bị phát hiện ngay lúc biên dịch."
    },
    {
      "id": 4,
      "question": "Khi phân tích chất lượng phần mềm, phần mềm gặp lỗi hiệu ứng phụ là loại lỗi nào?",
      "options": [
        "Ý đồ thiết kế sai",
        "Lỗi được truyền từ chương trình này sang chương trình khác.",
        "Lỗi viết sai quy định của ngôn ngữ",
        "Lỗi xảy ra khi một đơn vị chương trình làm thay đổi giá trị của một biến ngoài ý kiến của lập trình viên"
      ],
      "answer": 3,
      "explanation": "Lỗi hiệu ứng phụ (side effect) là khi một hàm thay đổi giá trị biến dùng chung ngoài dự định của lập trình viên."
    },
    {
      "id": 5,
      "question": "Đâu không là công việc của đặc tả độ tin cậy phần mềm?",
      "options": [
        "Phân tích hệ quả của các thất bại.",
        "Chia các thất bại thành các nhóm khác nhau.",
        "Thiết lập các yêu cầu về độ tin cậy bằng cách sử dụng các độ đo thích hợp cho từng loại.",
        "Tìm các thất bại để tìm ra cá nhân phải chịu trách nhiệm về thất bại đó."
      ],
      "answer": 3,
      "explanation": "Mục đích của phân tích thất bại là để nâng cao độ tin cậy, KHÔNG PHẢI để tìm cá nhân chịu trách nhiệm (đổ lỗi)."
    },
    {
      "id": 6,
      "question": "Mục tiêu chủ yếu của thử nghiệm tĩnh là:",
      "options": [
        "Xác định độ tin cậy của phần mềm",
        "Xác định các hư hỏng phần mềm",
        "Xác định các yêu cầu của phần mềm",
        "Xác định các chức năng của phần mềm"
      ],
      "answer": 1,
      "explanation": "Thử nghiệm tĩnh (Static testing) không chạy code mà dùng để phân tích tài liệu/mã nguồn nhằm xác định trước các hư hỏng."
    },
    {
      "id": 7,
      "question": "Quá trình thử nghiệm tĩnh liên quan đến 4 bước sau: 1. Xác định độ đo thao tác phần mềm. 2. Chọn ra hoặc sinh ra một tập các dữ liệu thử tương ứng với độ đo đó. 3. Áp dụng các trường hợp thử chương trình, ghi lại độ dài thời gian thi hành giữa mỗi cặp thất bại quan sát được. 4. Tính toán độ đo mức tin cậy sau một số đáng kể (về mặt thống kê) các thất bại đã quan sát được. Thứ tự các bước là:",
      "options": [
        "1 – 2 – 3 – 4",
        "4 – 2 – 1 – 3",
        "1 – 2 – 4 – 3",
        "1 – 3 – 2 – 4"
      ],
      "answer": 0,
      "explanation": "Trình tự: (1) Xác định độ đo -> (2) Sinh dữ liệu thử -> (3) Áp dụng kiểm thử -> (4) Tính toán độ tin cậy."
    },
    {
      "id": 8,
      "question": "Các phần mềm có thể gián tiếp gây ra thương vong, thí dụ hệ thống phần mềm trợ giúp thiết kế kỹ thuật, hệ thống cơ sở dữ liệu y tế liên quan đến các chất độc bảng A là loại phần mềm nào?",
      "options": [
        "Phần mềm an toàn sinh mệnh sơ cấp",
        "Phần mềm an toàn sinh mệnh thứ cấp",
        "Phần mềm thời gian thực",
        "Phần mềm mã nguồn mở"
      ],
      "answer": 1,
      "explanation": "Các lỗi phần mềm gián tiếp gây nguy hiểm (như sai CSDL y tế) thuộc nhóm An toàn sinh mệnh thứ cấp (secondary safety-critical)."
    },
    {
      "id": 9,
      "question": "Cách phát triển chương trình mà người lập trình giả định rằng các mâu thuẫn hoặc các lỗi chưa được phát hiện có thể tồn tại trong chương trình là:",
      "options": [
        "Lập trình phòng thủ",
        "Lập trình vì độ tin cậy",
        "Lập trình tránh lỗi",
        "Lập trình tha thứ lỗi"
      ],
      "answer": 0,
      "explanation": "Lập trình phòng thủ (Defensive programming) luôn giả định có lỗi/ngoại lệ để chủ động viết code bắt lỗi an toàn."
    },
    {
      "id": 10,
      "question": "Xác minh và thẩm định phần mềm là công việc diễn ra ở giai đoạn nào của quá trình sản xuất phần mềm",
      "options": [
        "Là một quá trình kéo dài suốt vòng đời của phần mềm",
        "Là công việc nằm ở giai đoạn phân tích yêu cầu phần mềm",
        "Là công việc diễn ra ở giai đoạn cài đặt chương trình",
        "Là công việc diễn ra ở giai đoạn bảo trì phần mềm"
      ],
      "answer": 0,
      "explanation": "Xác minh (Verification) và Thẩm định (Validation) là tiến trình kiểm soát chất lượng phải xuyên suốt toàn bộ vòng đời phần mềm."
    },
    {
      "id": 11,
      "question": "Việc xem xét cái được xây dựng có là sản phẩm đúng không? Tức là kiểm tra xem chương trình có được như mong đợi của người dùng hay không là công việc nào:",
      "options": [
        "Thẩm định",
        "Xác minh",
        "Kiểm thử",
        "Bảo trì"
      ],
      "answer": 0,
      "explanation": "Thẩm định (Validation) trả lời câu hỏi: 'Chúng ta có xây dựng đúng sản phẩm khách hàng cần không?'."
    },
    {
      "id": 12,
      "question": "Việc xem xét cái được xây dựng có đúng là sản phẩm không? Như thế là kiểm tra xem chương trình có phù hợp với đặc tả hay không là công việc nào:",
      "options": [
        "Thẩm định",
        "Xác minh",
        "Bảo trì",
        "Phân tích"
      ],
      "answer": 1,
      "explanation": "Xác minh (Verification) trả lời câu hỏi: 'Chúng ta có đang xây dựng sản phẩm đúng với tài liệu đặc tả không?'."
    },
    {
      "id": 13,
      "question": "1. Đặc tả độ tin cậy phần mềm gồm các bước: a. Chia các thất bại thành các nhóm khác nhau. b. Thiết lập các yêu cầu về độ tin cậy bằng cách sử dụng các độ đo thích hợp cho từng loại. c. Phân tích hệ quả của các thất bại. Thứ tự đúng của các bước là:",
      "options": [
        "c a b",
        "a b c",
        "b c a",
        "c b a"
      ],
      "answer": 0,
      "explanation": "Trình tự đặc tả: (c) Phân tích hệ quả thất bại -> (a) Phân nhóm -> (b) Đặt yêu cầu độ tin cậy cho từng nhóm."
    },
    {
      "id": 14,
      "question": "Độ tin cậy là một đặc trưng động của hệ thống, nó là:",
      "options": [
        "Một hàm của số các chức năng phần mềm",
        "Một hàm của số các kiểu dữ liệu trong phần mềm",
        "Một hàm của số các thất bại phần mềm",
        "Một hàm của số các tiêu chí đánh giá chất lượng phần mềm"
      ],
      "answer": 2,
      "explanation": "Độ tin cậy được định lượng dựa trên tần suất và số lượng các thất bại (failures) xuất hiện khi hệ thống vận hành."
    },
    {
      "id": 15,
      "question": "Khi phân tích chất lượng, đâu không phải là lỗi phần mềm:",
      "options": [
        "Tính toán chưa đầy đủ thời gian hoàn thành dự án",
        "Lỗi chiến lược: ý đồ thiết kế sai",
        "Phân tích các yêu cầu không đầy đủ hoặc lệch lạc",
        "Hiểu sai về các chức năng"
      ],
      "answer": 0,
      "explanation": "Tính toán sai thời gian hoàn thành dự án là lỗi Quản lý dự án, không phải là Lỗi kỹ thuật của bản thân Phần mềm."
    },
    {
      "id": 16,
      "question": "Kiểm tra là một quá trình của tìm kiếm lỗi, đâu là kiểu lỗi của ứng dụng?",
      "options": [
        "Không làm những điều cần phải làm và không làm những điều không cần làm",
        "Không những điều không cần làm",
        "Không làm những điều cần phải làm và làm những điều không cần làm",
        "Làm những điều cần phải làm và làm những điều không cần làm"
      ],
      "answer": 2,
      "explanation": "Lỗi chức năng thường rơi vào hai trường hợp: phần mềm không làm việc cần làm (thiếu) hoặc làm việc không được phép làm (sai)."
    },
    {
      "id": 17,
      "question": "Trong quá trình kiểm thử phần mềm, một kiểm tra thành công là kiểm tra:",
      "options": [
        "Tìm ra được các lỗi mới",
        "Tìm ra được lỗi giải thuật",
        "Tìm ra được lỗi thiết kế",
        "Không tìm được lỗi"
      ],
      "answer": 0,
      "explanation": "Mục đích của kiểm thử là tìm ra lỗi, do đó một ca kiểm thử 'thành công' là ca kiểm thử phát hiện được lỗi tiềm ẩn."
    },
    {
      "id": 18,
      "question": "Các kiểm tra của đội dự án được gọi là kiểm tra phát triển (Development test). Đâu không phải là kiểm tra phát triển?",
      "options": [
        "Kiểm tra đơn vị (Unit test)",
        "Kiểm tra tích hợp (Subsystem integration test)",
        "Kiểm tra hệ thống (System test)",
        "Kiểm tra mã nguồn(Code test)"
      ],
      "answer": 3,
      "explanation": "Kiểm tra phát triển (Development Test) bao gồm kiểm thử Đơn vị, Module, Tích hợp, Hệ thống. 'Kiểm tra mã nguồn' không phải một giai đoạn tiêu chuẩn."
    },
    {
      "id": 19,
      "question": "Các kiểm tra bởi các cơ quan bên ngoài được gọi là:",
      "options": [
        "Đảm bảo chất lượng (Quality assurance-QA) và kiểm tra chấp nhận (Acceptance test)",
        "Kiểm tra đơn vị (Unit test)",
        "Kiểm tra tích hợp (Subsystem integration test)",
        "Kiểm tra hệ thống (System test)"
      ],
      "answer": 0,
      "explanation": "Sự đánh giá của bên thứ 3/khách hàng thường nằm ở giai đoạn QA độc lập và Kiểm thử Chấp nhận (Acceptance testing)."
    },
    {
      "id": 20,
      "question": "Chiến lược kiểm tra nào mà hướng tới việc cho rằng logic đặc trưng là quan trọng và cần phải kiểm tra (hướng về logic - giải thuật):",
      "options": [
        "Black-box",
        "White-box",
        "Top-down",
        "Bottom-up"
      ],
      "answer": 1,
      "explanation": "Kiểm thử hộp trắng (White-box) nhìn vào cấu trúc bên trong, đường chạy và logic/giải thuật chi tiết của mã nguồn."
    },
    {
      "id": 21,
      "question": "Chiến lược kiểm tra nào coi chương trình chính là quan trọng nhất nên cần phải phát triển và kiểm tra trước và tiếp tục trong quá trình phát triển:",
      "options": [
        "Black-box",
        "White-box",
        "Top-down",
        "Bottom-up"
      ],
      "answer": 2,
      "explanation": "Kiểm thử từ trên xuống (Top-down) chú trọng tích hợp module điều khiển chính trước, giả lập các module cấp thấp."
    },
    {
      "id": 22,
      "question": "Phương pháp nào không phải là phương pháp của chiến lược kiểm tra hộp trắng:",
      "options": [
        "Chứng minh bằng toán học",
        "Cleanroom testing",
        "Đoán lỗi",
        "Logic test"
      ],
      "answer": 2,
      "explanation": "Đoán lỗi (Error guessing) hoàn toàn dựa vào kinh nghiệm kiểm thử viên về đầu vào/đầu ra, thuộc nhóm Hộp đen (Black-box)."
    },
    {
      "id": 23,
      "question": "Chiến lược kiểm tra nào dễ dàng hỗ trợ giao diện người dùng và thiết kế màn hình:",
      "options": [
        "Black-box",
        "White-box",
        "Top-down",
        "Bottom-up"
      ],
      "answer": 2,
      "explanation": "Vì Top-down tích hợp từ module cấp cao nhất (thường là UI) nên rất thuận tiện để sớm nhìn thấy và kiểm thử giao diện màn hình."
    },
    {
      "id": 24,
      "question": "Kiểm thử phần mềm là:",
      "options": [
        "Tiến trình đánh giá một hệ thống đã thỏa mãn các yêu cầu phần mềm chưa",
        "Tiến trình cài đặt các yêu cầu dựa trên bản phân tích thiết kế",
        "Tiến trình đánh giá phần mềm của Nhà chuyên môn",
        "Tiến trình đánh giá phần mềm của các Chuyên gia"
      ],
      "answer": 0,
      "explanation": "Kiểm thử là quá trình chạy chương trình để đánh giá xem hệ thống có làm đúng và thỏa mãn yêu cầu đã thiết kế hay không."
    },
    {
      "id": 25,
      "question": "Quá trình kiểm thử những hệ thống lớn nên phân chia như thế nào:",
      "options": [
        "Để nguyên cả khối",
        "Chia làm 3 giai đoạn: Thử đơn vị, Thử module, Thử hệ con",
        "Chia làm 6 giai đoạn: Thử đơn vị, Thử module, Thử hệ con, Thử hệ thống, Thử nghiệm thu, Thử nguyên cả khối.",
        "Chia làm 5 giai đoạn: Thử đơn vị, Thử module, Thử hệ con, Thử hệ thống, Thử nghiệm thu"
      ],
      "answer": 3,
      "explanation": "Hệ thống lớn có 5 mức kiểm thử chuẩn: Đơn vị (Unit) -> Module -> Hệ con (Sub-system) -> Hệ thống (System) -> Nghiệm thu (Acceptance)."
    },
    {
      "id": 26,
      "question": "Công cụ kiểm thử mà những bộ lọc chuyên dụng này được dùng để kiểm tra chất lượng của phần mềm để đảm bảo rằng nó đáp ứng các chuẩn mã hoá tối thiểu là loại công cụ nào?",
      "options": [
        "Bộ phân tích tĩnh",
        "Bộ xử lý khẳng định",
        "Bộ kiểm toán mã",
        "Bộ sinh tệp kiểm thử"
      ],
      "answer": 2,
      "explanation": "Bộ kiểm toán mã (Code auditor) tự động phân tích code tĩnh để đảm bảo mã nguồn tuân thủ các tiêu chuẩn lập trình."
    },
    {
      "id": 27,
      "question": "Phát biểu nào sau đây là hợp lý nhất cho việc sử dụng các đội kiểm thử phần mềm độc lập với đội phát triển phần mềm?",
      "options": [
        "Các nhà phát triển phần mềm không cần thực hiện bất kỳ kiểm thử nào.",
        "Đội kiểm thử sẽ kiểm thử phần mềm triệt để hơn.",
        "Các nhà kiểm thử không nên can thiệp vào dự án cho đến khi bắt đầu việc kiểm thử.",
        "Các tranh cãi giữa nhà phát triển phần mềm và các nhà phát triển sẽ giảm."
      ],
      "answer": 1,
      "explanation": "Đội kiểm thử độc lập (IV&V) không bị thiên kiến của người code nên sẽ thiết kế bài test khách quan và triệt để hơn."
    },
    {
      "id": 28,
      "question": "Validation (thẩm định) là:",
      "options": [
        "Kiểm tra xem sản phẩm có tương thích với mong đợi của khách hàng không.",
        "Kiểm tra xem sản phẩm có tương thích với đặc tả của phần mềm không.",
        "Kiểm tra xem sản phẩm có tương thích với các ràng buộc của dự án không.",
        "Kiểm tra xem sản phẩm có tương thích với bản thiết kế chi tiết không."
      ],
      "answer": 0,
      "explanation": "Validation (Thẩm định) nhằm đối chiếu sản phẩm cuối cùng với kỳ vọng và nhu cầu thực tế của người dùng/khách hàng."
    },
    {
      "id": 29,
      "question": "Trong giai đoạn phát triển hệ thống, loại kiểm thử nào sau đây không được chấp nhận?",
      "options": [
        "Kiểm thử đơn vị (unit testing)",
        "Kiểm thử từ dưới lên (bottom up testing)",
        "Kiểm thử tích hợp (integration testing)",
        "Kiểm thử chấp nhận(acceptance testing)"
      ],
      "answer": 1,
      "explanation": "Kiểm thử từ dưới lên (Bottom-up) là một chiến lược tích hợp, không phải là một mức độ/giai đoạn kiểm thử tổng thể như Unit hay Acceptance."
    },
    {
      "id": 30,
      "question": "Để thiết kế các trường hợp kiểm thử cho kỹ thuật kiểm thử điều kiện (condition testing) nên:",
      "options": [
        "Dựa vào kiểm thử đường dẫn cơ bản.",
        "Thực hiện các điều kiện luận lý trong một module.",
        "Chọn các đường dẫn kiểm thử dựa vào vị trí tạo và sử dụng biến.",
        "Tập trung vào việc kiểm tra tính hợp lệ của vòng lặp."
      ],
      "answer": 1,
      "explanation": "Kiểm thử điều kiện (Condition testing) tập trung thực thi tất cả các nhánh của các biểu thức logic (True/False) trong code."
    },
    {
      "id": 31,
      "question": "Để thiết kế các trường hợp kiểm thử cho kỹ thuật kiểm thử dòng dữ liệu (Data flow testing) nên:",
      "options": [
        "Dựa vào kiểm thử đường dẫn cơ bản.",
        "Thực hiện các điều kiện luận lý trong một module.",
        "Chọn các đường dẫn kiểm thử dựa vào vị trí tạo và sử dụng biến.",
        "Tập trung vào việc kiểm tra tính hợp lệ của vòng lặp."
      ],
      "answer": 2,
      "explanation": "Kiểm thử dòng dữ liệu (Data flow testing) duyệt đồ thị luồng điều khiển dựa trên vị trí biến được khai báo và vị trí được sử dụng."
    },
    {
      "id": 32,
      "question": "Để quy trình kiểm thử phần mềm thành công, một trong các chiến lược sau đây nên được dùng:",
      "options": [
        "Tổ chức các cuộc họp kỹ thuật chính thức trước khi bắt đầu kiểm thử",
        "Sử dụng các đội kiểm thử độc lập",
        "Đợi cho đến khi mã được viết xong trước khi lập kế hoạch kiểm thử",
        "Tiến hành kiểm thử song song với tất cả các giai đoạn của qui trình sản xuất phần mềm"
      ],
      "answer": 3,
      "explanation": "Kiểm thử không nên để đến cuối mới làm. Nó phải diễn ra song song và xuyên suốt tất cả các giai đoạn của vòng đời phát triển."
    },
    {
      "id": 33,
      "question": "Kiểm thử sự chấp nhận ( Acceptance tests)thường được thực hiện bởi:",
      "options": [
        "Nhà phát triển",
        "Người dùng cuối",
        "Đội kiểm thử",
        "Kỹ sư hệ thống"
      ],
      "answer": 1,
      "explanation": "Kiểm thử chấp nhận (Acceptance test / UAT) phải do người dùng cuối (End-user) thực hiện để quyết định có nhận phần mềm hay không."
    },
    {
      "id": 34,
      "question": "Nếu 1 hàm có n biến thì số trường hợp kiểm thử giá trị biên của các biến sẽ là:",
      "options": [
        "n",
        "6n",
        "3n",
        "n + 6"
      ],
      "answer": 1,
      "explanation": "Trong kiểm thử giá trị biên Robust cho n biến, công thức lý thuyết tổng số test case thường có dạng xấp xỉ 6n."
    },
    {
      "id": 35,
      "question": "Cho đoạn chương trình sau: int foo( int a, int b, int c) { if ( a == b) and (c == d) return a + c; else if( a > b) return a + b; else return a + d; } Phải dùng tối thiểu bao nhiêu test case để độ bao phủ quyết định là 100%",
      "options": [
        "1",
        "2",
        "3",
        "4"
      ],
      "answer": 2,
      "explanation": "Có 3 luồng xử lý riêng biệt: (1) if, (2) else if, (3) else. Do đó cần ít nhất 3 test cases để duyệt qua hết 100% nhánh quyết định."
    },
    {
      "id": 36,
      "question": "Phương pháp Phân tích giá trị biên trong kiểm thử phần mềm sẽ chọn các giá trị nào để kiểm thử:",
      "options": [
        "Giá trị ngay dưới giá trị nhỏ nhất, Giá trị nhỏ nhất, Giá trị ngay trên giá trị nhỏ nhất, Giá trị ngay dưới giá trị lớn nhất, Giá trị lớn nhất, Giá trị ngay trên giá trị lớn nhất.",
        "Ngay dưới giá trị nhỏ nhất, Giá trị nhỏ nhất, Giá trị ngay trên giá trị nhỏ nhất, Một giá trị bình thường, Ngay dưới giá trị lớn nhất, Giá trị lớn nhất.",
        "Giá trị nhỏ nhất, Ngay trên giá trị nhỏ nhất, Ngay trên giá trị lớn nhất, Giá trị lớn nhất.",
        "Giá trị nhỏ nhất, Một giá trị bình thường, Giá trị ngay dưới giá trị lớn nhất ,Giá trị lớn nhất, Ngay trên giá trị lớn nhất."
      ],
      "answer": 0,
      "explanation": "Phân tích giá trị biên (Boundary Value Analysis) chọn bộ 6 điểm kiểm thử bao quanh ranh giới min và max."
    },
    {
      "id": 37,
      "question": "Trong kỹ thuật phân tích giá trị biên để kiểm thử phần mềm, ví dụ sau sẽ chọn các giá trị nào: Ví dụ: a <= y1 <=b",
      "options": [
        "Chọn a-1, a, a+1, b-1, b, b+1.",
        "Chọn a-1, a, (a+b)/2, b, b+1.",
        "Chọn a-1, a+1, (a+b)/2, b+1.",
        "Chọn a, a+1, a+2, b, b+1, b+2."
      ],
      "answer": 0,
      "explanation": "Với miền đóng a <= y1 <= b, ta cần test quanh điểm a (a-1, a, a+1) và quanh điểm b (b-1, b, b+1)."
    },
    {
      "id": 38,
      "question": "Trong kỹ thuật phân tích giá trị biên để kiểm thử phần mềm, ví dụ sau sẽ chọn các giá trị nào để kiểm thử: Ví dụ: 10 <= x <=100",
      "options": [
        "Chọn 9, 10, 11, 100, 101, 102.",
        "Chọn 9, 11, 55, 99, 100, 101.",
        "Chọn 9, 10, 11, 55, 100, 101.",
        "Chọn 9, 10, 11, 99, 100, 101."
      ],
      "answer": 3,
      "explanation": "Với biên 10 <= x <= 100, lấy 6 giá trị: (9, 10, 11) và (99, 100, 101)."
    },
    {
      "id": 39,
      "question": "Trong kỹ thuật phân tích giá trị biên để kiểm thử phần mềm, ví dụ sau sẽ chọn các giá trị nào để kiểm thử: Ví dụ: ‘b’ < x < ‘n’",
      "options": [
        "Chọn ‘b’, ‘c’, ‘d’, ‘l’, ‘m’, ‘n’.",
        "Chọn ‘b’, ‘c’, ‘d’, ‘h’, ‘l’, ‘m’.",
        "Chọn ‘c’, ‘d’, ‘e’, ‘l’, ‘m’, ‘n’.",
        "Chọn ‘b’, ‘c’, ‘h’, ‘m’, ‘n’, ‘p’."
      ],
      "answer": 0,
      "explanation": "Miền 'b' < x < 'n' là khoảng mở, tương đương với đoạn kín 'c' <= x <= 'm', do đó ta dùng các giá trị xoay quanh c và m."
    },
    {
      "id": 55,
      "question": "Trong kỹ thuật phân tích giá trị biên để kiểm thử phần mềm, ví dụ sau sẽ chọn các giá trị nào để kiểm thử: Ví dụ: 0 < x <= 1000",
      "options": [
        "Chọn 0, 1, 2, 999, 1000, 1001.",
        "Chọn 0, 1, 2, 500, 999, 1000.",
        "Chọn 0, 1, 500, 998, 999, 1000.",
        "Chọn 1, 2, 500, 999, 1000,1001."
      ],
      "answer": 0,
      "explanation": "Miền 0 < x <= 1000 tương đương với 1 <= x <= 1000, nên các biên là (0, 1, 2) và (999, 1000, 1001)."
    },
    {
      "id": 40,
      "question": "Đâu là loại hình kiểm thử?",
      "options": [
        "“Người sử dụng kém”",
        "Cận dưới",
        "“Kẻ phá hoại\"",
        "Đám đông"
      ],
      "answer": 2,
      "explanation": "Trong thử nghiệm, có kiểu tiếp cận mô phỏng 'kẻ phá hoại' (destructive testing) để xem ứng dụng có chịu lỗi tốt không."
    },
    {
      "id": 41,
      "question": "Đâu là nguyên tắc kiểm thử?",
      "options": [
        "\"Người sử dụng kém”",
        "Qua sự cố",
        "Trên dữ liệu thật",
        "Trên thị trường thật"
      ],
      "answer": 2,
      "explanation": "Một trong các nguyên tắc kiểm thử là phải luôn tiến hành kiểm thử trên môi trường và bộ dữ liệu thật (hoặc giống thật nhất)."
    },
    {
      "id": 42,
      "question": "Đâu là phương pháp kiểm tra White Box?",
      "options": [
        "Kiểm tra logic-logic test",
        "Phân hoạch cân bằng (Balance analysis)",
        "Phân tích cực biên (Boundary Analysis)",
        "Đoán lỗi (error guess)"
      ],
      "answer": 0,
      "explanation": "Kiểm tra logic (Logic test) đi sâu vào luồng xử lý và biểu thức bên trong code, nên đây là phương pháp hộp trắng (White-box)."
    },
    {
      "id": 43,
      "question": "Trong kỹ thuật phân tích giá trị biên để kiểm thử phần mềm, ví dụ sau sẽ chọn các giá trị nào để kiểm thử: Ví dụ: 50 <= y < 500",
      "options": [
        "Chọn 49, 50, 51, 498, 499, 500",
        "Chọn 50, 51, 275, 499, 500, 501",
        "Chọn 49, 50, 275, 498, 499, 501",
        "Chọn 49, 50, 55, 275, 499, 500"
      ],
      "answer": 0,
      "explanation": "Khoảng 50 <= y < 500 đóng tại 50 và mở tại 500 (tức là max = 499), nên tập giá trị biên là (49, 50, 51) và (498, 499, 500)."
    },
    {
      "id": 44,
      "question": "Trong kỹ thuật phân tích giá trị biên để kiểm thử phần mềm, ví dụ sau sẽ chọn các giá trị nào để kiểm thử: Ví dụ: 0 <= i <= 500",
      "options": [
        "Chọn -1, 0, 1, 499, 500, 501",
        "Chọn 1, 2, 250, 499, 500, 501",
        "Chọn -1, 0, 1, 498, 499, 500",
        "Chọn 0, 1, 250, 498, 499, 500"
      ],
      "answer": 0,
      "explanation": "Tương tự, biên đóng tại 0 và 500 sẽ chọn ( -1, 0, 1 ) và ( 499, 500, 501 )."
    },
    {
      "id": 45,
      "question": "Trong kỹ thuật phân tích giá trị biên để kiểm thử phần mềm, ví dụ sau sẽ chọn các giá trị nào để kiểm thử: Ví dụ: -6 <= y < 600",
      "options": [
        "Chọn -7, -6, -5, 598, 599, 600",
        "Chọn -6, -5, 297, 599, 600, 601",
        "Chọn -6, -7, 297, 598, 599, 601",
        "Chọn -6, -7, -8, 599, 600, 601"
      ],
      "answer": 0,
      "explanation": "Biên -6 <= y < 600 tương đương kín ở -6 và 599. Biên sẽ là (-7, -6, -5) và (598, 599, 600)."
    },
    {
      "id": 46,
      "question": "Trong kỹ thuật phân tích giá trị biên để kiểm thử phần mềm, ví dụ sau sẽ chọn các giá trị nào để kiểm thử: Ví dụ: -10 <= a <= 800",
      "options": [
        "Chọn -11, -10, -9, 799, 800, 801",
        "Chọn -9, -8, 395, 799, 800, 801",
        "Chọn -11, -10, 395, 799, 800, 801",
        "Chọn -9, -10, 395, 798, 799, 800"
      ],
      "answer": 0,
      "explanation": "Biên đóng -10 <= a <= 800 sẽ chọn các điểm (-11, -10, -9) và (799, 800, 801)."
    },
    {
      "id": 47,
      "question": "Chương trình P là một bộ biến đổi tuần tự P để chuyển cái vào x thành ra cái y trong đó:",
      "options": [
        "x và y hoàn toàn được xác định trước",
        "x được xác định trước, y chưa được xác định trước",
        "x chưa được xác định trước, y được xác định trước",
        "x và y hoàn toàn chưa được xác định"
      ],
      "answer": 0,
      "explanation": "Với lập trình tuần tự, để biến đổi x thành y thì cả input x và output y đều phải được xác định/khai báo cụ thể từ trước."
    },
    {
      "id": 48,
      "question": "Điều kiện để có mệnh đề B sau khi thực hiện lệnh gán x: = E (với E là một biểu thức) từ mệnh đề {A} thì trước đó ta phải có {A} suy dẫn được ra {B[x|E]} là nội dung của tiên đề nào:",
      "options": [
        "Tiên đề tuần tự",
        "Tiên đề gán",
        "Tiên đề rẽ nhánh",
        "Tiên đề lặp"
      ],
      "answer": 1,
      "explanation": "Định lý mô tả sau khi gán x := E thì tính chất bị biến đổi chính là nội dung của Tiên đề Gán (Assignment Axiom)."
    },
    {
      "id": 49,
      "question": "Với mệnh đề dữ liệu vào {A}, mệnh đề dữ liệu ra {B}, biểu thức logic E, và đoạn chương trình P. Nếu ta có {A, E}P{B} và A,!EL=> B thì ta nói rằng mệnh đề {A} và {B} tuân theo cấu trúc rẽ nhánh dạng khuyết với cấu trúc P và điều kiện lựa chọn E; tức là: {A} if E then P; {B} là nội dung của tiên đề nào:",
      "options": [
        "Tiên đề tuần tự",
        "Tiên đề gán",
        "Tiên đề rẽ nhánh",
        "Tiên đề lặp"
      ],
      "answer": 2,
      "explanation": "Đây là nội dung của Tiên đề rẽ nhánh (dạng if-then khuyết thiếu nhánh else)."
    },
    {
      "id": 50,
      "question": "Với mệnh đề dữ liệu vào {A}, mệnh đề dữ liệu ra {B}, biểu thức logic E, và các đoạn chương trình P, Q. Nếu ta có {A, E}P{B} và {A,!E}Q{B} thì ta nói rằng mệnh đề {A} và {B} tuân theo cấu trúc rẽ nhánh dạng đủ với cấu trúc P, Q và điều kiện lựa chọn E; tức là: {A} if E then P else Q; {B} là nội dung của tiên đề nào:",
      "options": [
        "Tiên đề tuần tự",
        "Tiên đề gán",
        "Tiên đề rẽ nhánh",
        "Tiên đề lặp"
      ],
      "answer": 2,
      "explanation": "Mô hình IF-THEN-ELSE phản ánh luồng chia nhánh quyết định đầy đủ trong Tiên đề Rẽ nhánh."
    },
    {
      "id": 51,
      "question": "Cho mệnh đề dữ liệu vào {A}, biểu thức logic E và đoạn trình P. Nếu mệnh đề {A} tuân theo cấu trúc lặp P với điều kiện lặp E thì mệnh đề {A} sẽ bất biến đối với P trong điều kiện E, tức là {A,E}P{A}, kết thúc vòng lặp ta có mệnh đề {A,!E}. Lúc này ta viết: {A} while E do P; {A,!E} là nội dung của tiên đề nào:",
      "options": [
        "Tiên đề tuần tự",
        "Tiên đề gán",
        "Tiên đề rẽ nhánh",
        "Tiên đề lặp"
      ],
      "answer": 3,
      "explanation": "Tiên đề Lặp (Loop Axiom) chứng minh tính đúng đắn cho vòng lặp WHILE thông qua tính bất biến (Loop Invariant)."
    },
    {
      "id": 52,
      "question": "Cho mệnh đề dữ liệu vào {A} và đoạn chương trình P. Nếu ta có {A}P{A} thì ta nói rằng tính chất dữ liệu của mệnh đề {A} không thay đổi khi chịu sự tác động của đoạn chương trình P và lúc này người ta nói rằng mệnh đề {A} là bất biến đối với P, tức ta có: {A}P {A} là nội dung của tiên đề nào:",
      "options": [
        "Tiên đề tuần tự",
        "Tiên đề gán",
        "Tiên đề rẽ nhánh",
        "Tiên đề về tính bất biến của chương trình"
      ],
      "answer": 3,
      "explanation": "Khi dữ liệu A không bị thay đổi sau khi P chạy qua, ta gọi là Tiên đề về tính bất biến (Invariance Axiom)."
    },
    {
      "id": 53,
      "question": "\"Hệ thống các hoạt động nhằm đánh giá và điều khiển chất lượng của sản phẩm\" được gọi là tắt là:",
      "options": [
        "QA",
        "QC",
        "QE",
        "QI"
      ],
      "answer": 1,
      "explanation": "QC (Quality Control / Kiểm soát chất lượng) là những bước đánh giá, tìm lỗi trực tiếp trên sản phẩm đã thành hình."
    },
    {
      "id": 54,
      "question": "\"Hệ thống lên kế hoạch, xem xét, đánh giá trên toàn bộ quy trình phát triển sản phẩm\" được gọi tắt là:",
      "options": [
        "QC",
        "QA",
        "QE",
        "QI"
      ],
      "answer": 1,
      "explanation": "QA (Quality Assurance / Đảm bảo chất lượng) thiên về quản lý, giám sát quy trình và ngăn ngừa lỗi từ trong trứng nước."
    }
  ],
  "6": [
    {
      "id": 1,
      "question": "Trong quá trình phát triển phần mềm, giai đoạn bảo trì phần mềm có nghĩa là :",
      "options": [
        "Thay đổi và phát triển hệ thống đã được xây dựng",
        "Xây dựng không gian giải pháp cho vấn đề",
        "Xây dựng một hệ thống thực hiện được dựa vào thiết kế",
        "Thẩm định lại tính đúng đắn của giải pháp theo yêu cầu ban đầu đã đặt ra"
      ],
      "answer": 0,
      "explanation": "Bảo trì là việc thay đổi, sửa lỗi và nâng cấp tiếp tục cho một hệ thống phần mềm đã được chuyển giao sử dụng."
    },
    {
      "id": 2,
      "question": "Trong quá trình bảo trì phần mềm: \"sửa đổi phần mềm để thích ứng với những thay đổi của môi trường\" được gọi là:",
      "options": [
        "Bảo trì thích hợp.",
        "Bảo trì phòng ngừa.",
        "Bảo trì hoàn thiện.",
        "Bảo trì hiệu chỉnh"
      ],
      "answer": 0,
      "explanation": "Bảo trì thích hợp/thích ứng (Adaptive Maintenance) nhằm giúp phần mềm hoạt động tốt khi hệ điều hành, CSDL hoặc môi trường thay đổi."
    },
    {
      "id": 3,
      "question": "Trong quá trình bảo trì phần mềm: \"là những thay đổi để cải thiện các tính năng bảo trì như độ tin cậy, cung cấp nền tảng tốt hơn cho những mở rộng sau này…\" gọi là:",
      "options": [
        "Bảo trì tiếp hợp.",
        "Bảo trì phòng ngừa",
        "Bảo trì hoàn thiện.",
        "Bảo trì hiệu chỉnh"
      ],
      "answer": 2,
      "explanation": "Bảo trì hoàn thiện (Perfective Maintenance) giúp tối ưu hiệu năng, độ tin cậy và thêm các tiện ích để hoàn hảo hệ thống hơn."
    },
    {
      "id": 4,
      "question": "Bảo trì có cấu trúc là:",
      "options": [
        "Bảo trì cấu trúc dữ liệu của phần mềm",
        "Bảo trì phần mềm theo cấu trúc từ trên xuống dưới",
        "Bảo trì phần mềm theo cấu trúc từ dưới lên trên",
        "Bảo trì có hệ thống được phát triển theo đúng trình tự của kỹ nghệ phần mềm (phân tích, thiết kế, lập trình , kiểm định)"
      ],
      "answer": 3,
      "explanation": "Bảo trì cấu trúc là hoạt động bảo trì chuyên nghiệp, tuân theo quy trình công nghệ phần mềm rõ ràng thay vì vá lỗi tạm bợ."
    },
    {
      "id": 5,
      "question": "Cho công thức của bảo trì: M = p + (K*exp(c-d)). Trong đó: tham số K là:",
      "options": [
        "Hằng số kinh nghiệm.",
        "Đánh giá mức độ hiểu biết về phần mềm.",
        "Công việc làm",
        "Độ phức tạp cho việc thiếu thiết kế về cấu trúc và dữ liệu."
      ],
      "answer": 0,
      "explanation": "Trong công thức chi phí bảo trì M = p + (K*exp(c-d)), K đóng vai trò là một hằng số rút ra từ kinh nghiệm."
    },
    {
      "id": 6,
      "question": "Cho công thức của bảo trì: M = p + (K*exp(c-d)). Trong đó: tham số d là:",
      "options": [
        "Hằng số kinh nghiệm",
        "Đánh giá mức độ hiểu biết về phần mềm",
        "Công việc làm",
        "Độ phức tạp cho việc thiếu thiết kế về cấu trúc và dữ liệu"
      ],
      "answer": 1,
      "explanation": "Trong công thức đó, d tượng trưng cho mức độ hiểu biết (knowledge) của đội ngũ kỹ sư về phần mềm."
    },
    {
      "id": 7,
      "question": "Đâu không phải là 1 trong 4 loại bảo trì thường sử dụng:",
      "options": [
        "Bảo trì hiệu chỉnh",
        "Bảo trì thích hợp",
        "Bảo trì hoàn thiện",
        "Bảo trì sửa lỗi"
      ],
      "answer": 3,
      "explanation": "Bốn loại bảo trì chuẩn là: Hiệu chỉnh (Sửa lỗi), Thích ứng, Hoàn thiện và Phòng ngừa. 'Bảo trì sửa lỗi' (Corrective) thường bị trùng lấp."
    },
    {
      "id": 8,
      "question": "Một chương trình con bị xóa hay thay đổi có thể dẫn tới dạng hiệu ứng lề nào của công việc bảo trì?",
      "options": [
        "Hiệu ứng lề của việc thay đổi mã nguồn",
        "Hiệu ứng lề của việc thay đổi tài liệu",
        "Hiệu ứng lề của việc thay đổi dữ liệu",
        "Hiệu ứng lề của việc thay đổi chương trình con"
      ],
      "answer": 3,
      "explanation": "Việc xóa hoặc đổi tên hàm/module ảnh hưởng tới các nơi gọi nó, tạo ra hiệu ứng lề chương trình con (subprogram side effect)."
    },
    {
      "id": 9,
      "question": "Việc mở và đóng file bị thay đổi có thể dẫn đến dạng hiệu ứng lề nào của công việc bảo trì?",
      "options": [
        "Hiệu ứng lề của việc thay đổi dữ liệu",
        "Hiệu ứng lề của việc thay đổi mã nguồn",
        "Hiệu ứng lề của việc thay đổi tài liệu",
        "Hiệu ứng lề của việc đóng file"
      ],
      "answer": 0,
      "explanation": "Thay đổi cách đóng/mở file hay format file sẽ ảnh hưởng đến luồng dữ liệu truyền vào/ra, gây hiệu ứng lề dữ liệu."
    },
    {
      "id": 10,
      "question": "Các phép toán logic bị thay đổi có thể dẫn đến dạng hiệu ứng lề nào của công việc bảo trì?",
      "options": [
        "Hiệu ứng lề của việc thay đổi tài liệu",
        "Hiệu ứng lề của việc thay đổi dữ liệu",
        "Hiệu ứng lề của việc thay đổi mã nguồn",
        "Hiệu ứng lề của việc xóa phép toán Logic"
      ],
      "answer": 2,
      "explanation": "Sửa đổi phép toán logic (if/else) tác động trực tiếp đến giải thuật mã nguồn, tạo hiệu ứng lề mã nguồn (code side effect)."
    },
    {
      "id": 11,
      "question": "Bảo trì phần mềm là:",
      "options": [
        "Điều chỉnh các lỗi mà chưa được phát hiện trong các giai đoạn trước của chu kỳ sống của một phần mềm.",
        "Nâng cấp tính năng sử dụng của một phần mềm.",
        "Điều chỉnh các lỗi mà chưa được phát hiện trong các giai đoạn trước của chu kỳ sống của một phần mềm và đảm bảo an toàn vận hành của phần mềm.",
        "Điều chỉnh các lỗi, nâng cấp tính năng sử dụng và đảm bảo an toàn vận hành của phần mềm."
      ],
      "answer": 3,
      "explanation": "Bảo trì phần mềm bao quát cả 3 hoạt động: Sửa lỗi tồn đọng, Nâng cấp tính năng mới và Đảm bảo vận hành an toàn."
    },
    {
      "id": 12,
      "question": "Nếu thành phần có được duy nhất của một cấu hình phần mềm là mã nguồn, hoạt động bảo trì sẽ diễn ra:",
      "options": [
        "Khá đơn giản.",
        "Bình thường như những phần mềm có đầy đủ thành phần khác.",
        "Khá phức tạp.",
        "Không thể tiến hành hoạt động bảo trì."
      ],
      "answer": 2,
      "explanation": "Bảo trì chỉ dựa vào mã nguồn (không có tài liệu mô tả) được gọi là bảo trì phi cấu trúc, cực kỳ khó khăn và rủi ro cao."
    },
    {
      "id": 13,
      "question": "Nếu có một cấu hình phần mềm hoàn thiện, nhiệm vụ bảo trì bắt đầu bằng việc:",
      "options": [
        "Đánh giá các tài liệu thiết kế.",
        "Xác định các đặc điểm thuộc cấu trúc quan trọng, các đặc điểm hoạt động và giao diện.",
        "Thiết lập kế hoạch sửa đổi.",
        "Thiết kế được thay đổi."
      ],
      "answer": 0,
      "explanation": "Với hệ thống chuẩn, trước khi sửa code, kỹ sư phải đánh giá tài liệu thiết kế để hiểu rõ logic kiến trúc của phần mềm trước."
    },
    {
      "id": 14,
      "question": "Trong chi phí cho việc bảo trì, phát biểu nào sau chưa đúng:",
      "options": [
        "Các cơ hội phát triển bị bỏ qua vì các tài nguyên có sẵn đều dành cho nhiệm vụ bảo trì.",
        "Sự không hài lòng của người dùng khi các yêu cầu có vẻ hợp lý cho việc sửa chữa hay sửa đổi không được chú ý một cách hợp lý.",
        "Việc suy giảm chất lượng nói chung do lỗi tạo ra bởi sự thay đổi trong các phần mềm được bảo trì.",
        "Chi phí cuối cùng cho việc bảo trì nhìn chung không ảnh hưởng nhiều tới năng suất lao động."
      ],
      "answer": 3,
      "explanation": "Chi phí bảo trì khổng lồ hoàn toàn có khả năng vắt kiệt nguồn lực của doanh nghiệp và làm đình trệ mọi dự án phát triển mới."
    },
    {
      "id": 15,
      "question": "Trong bảo trì phần mềm, người ta đã ghi nhận sự giảm sút năng suất lao động theo tỷ lệ 40:1, có nghĩa là:",
      "options": [
        "Chi phí cho việc phát triển trị giá $25.00 trên một dòng lệnh sẽ có thể trị giá tới $1000.00 cho việc bảo trì mỗi dòng lệnh.",
        "Chi phí cho việc phát triển trị giá $1000.00 trên một dòng lệnh sẽ có thể trị giá tới $25.00 cho việc bảo trì mỗi dòng lệnh.",
        "Chi phí cho việc phát triển trị giá $25.00 trên một dòng lệnh sẽ có thể trị giá tới $1000.00 cho việc bảo trì mỗi chương trình.",
        "Chi phí cho việc phát triển trị giá $1000.00 trên một chương trình sẽ có thể trị giá tới $25.00 cho việc bảo trì mỗi dòng lệnh."
      ],
      "answer": 0,
      "explanation": "Tỷ lệ 40:1 chỉ ra sự đắt đỏ của bảo trì: Viết 1 dòng lệnh mới tốn 25 đô, nhưng chi phí vòng đời để bảo trì nó tốn 1000 đô."
    },
    {
      "id": 16,
      "question": "Các thông tin cần phải lưu giữ trong hồ sơ bảo trì thường không quan tâm đến:",
      "options": [
        "Số lượng các câu lệnh trong chương trình nguồn.",
        "Chi phí cho từng công việc bảo trì.",
        "Ngôn ngữ lập trình được sử dụng.",
        "Số các câu lệnh được xóa khỏi chương trình nguồn khi chương trình thay đổi."
      ],
      "answer": 0,
      "explanation": "Hồ sơ bảo trì quan tâm đến chi phí, nguyên nhân lỗi và lịch sử cập nhật. Số lượng lệnh trong file nguồn là số liệu tĩnh, ít giá trị lưu trữ."
    },
    {
      "id": 17,
      "question": "Việc xác định giá trị bảo trì cho các phần mềm là:",
      "options": [
        "Đơn giản",
        "Đơn giản tính theo tỉ lệ quy định",
        "Phức tạp do thiếu thông tin",
        "Không thể xác định được"
      ],
      "answer": 2,
      "explanation": "Xác định được chính xác ngân sách bảo trì là rất phức tạp vì phần mềm vô hình và phụ thuộc nhiều vào chất lượng code nền tảng."
    },
    {
      "id": 18,
      "question": "Bảo trì phần mềm không phải được thực hiện để:",
      "options": [
        "Thay thế nâng cấp phiên bản mới.",
        "Giao diện với các phần mềm khác.",
        "Thích ứng với các loại phần cứng, phần mềm, tính năng hệ thống,…khác nhau có thể được sử dụng.",
        "Tiến hóa phần mềm."
      ],
      "answer": 0,
      "explanation": "Bảo trì dùng để tiến hóa và vá lỗi hệ thống hiện tại. Nếu 'thay thế hoàn toàn bằng phiên bản mới' thì gọi là đập đi xây lại dự án mới."
    },
    {
      "id": 19,
      "question": "Đâu không phải là đặc điểm chính trong các hoạt động của người bảo trì:",
      "options": [
        "Hoàn thiện các chức năng hiện có.",
        "Phân tích thiết kế thêm các chức năng mới.",
        "Xác định các mối đe dọa an ninh và sửa chữa các lỗ hổng an ninh.",
        "Ngăn ngừa việc xuống cấp hiệu xuất tới mức không thể chấp nhận được."
      ],
      "answer": 1,
      "explanation": "Phân tích và phát triển thêm chức năng cốt lõi (quy mô lớn) là dự án Mới, không được tính vào kinh phí bảo trì hệ thống cũ."
    },
    {
      "id": 20,
      "question": "Yếu tố môi trường và mối quan hệ nào ít ảnh hưởng nhất tới chi phí bảo trì phần mềm:",
      "options": [
        "Môi trường hoạt động liên quan đến phần cứng và phần mềm.",
        "Môi trường tổ chức liên quan đến chính sách, tính cạnh tranh, quy trình của sản phẩm.",
        "Mối quan hệ giữa các doanh nghiệp.",
        "Môi trường tổ chức liên quan đến chính sách, tính cạnh tranh của nhân viên."
      ],
      "answer": 2,
      "explanation": "Chi phí bảo trì bị ảnh hưởng bởi code, tài liệu và môi trường nhân sự nội bộ. Mối quan hệ với công ty khác không tác động trực tiếp."
    },
    {
      "id": 21,
      "question": "Chọn quan điểm đúng nhất về quản lý thay đổi phần mềm:",
      "options": [
        "Việc quản lý thay đổi ứng dụng giúp cho nhóm triển khai đáp ứng tốt nhất những ý thích chợt nảy ra của người sử dụng.",
        "Việc quản lý thay đổi ứng dụng giúp cho nhóm triển khai bỏ qua những ý thích chợt nảy ra của người sử dụng cũng như các yêu cầu phát sinh.",
        "Việc quản lý thay đổi ứng dụng giúp cho nhóm triển khai đáp ứng những ý thích chợt nảy ra của người sử dụng trong khi hạn chế các phép thực hiện các yêu cầu dù là hợp lý.",
        "Việc quản lý thay đổi ứng dụng giúp cho nhóm triển khai bỏ qua những ý thích chợt nảy ra của người sử dụng trong khi vẫn cho phép thực hiện các yêu cầu hợp lý."
      ],
      "answer": 3,
      "explanation": "Quản lý thay đổi giúp duy trì tiến độ bằng cách đánh giá kỹ và đáp ứng các yêu cầu hợp lý, đồng thời từ chối các ý thích nhất thời."
    },
    {
      "id": 22,
      "question": "Quản lý điều khiển thay đổi có hiệu lực từ khi nào:",
      "options": [
        "Từ khi bắt đầu triển khai dự án cho đến khi dự án kết thúc.",
        "Từ khi sản phẩm đầu tiên được chấp nhận là hoàn thiện cho đến khi dự án kết thúc.",
        "Từ khi sản phẩm đầu tiên được chấp nhận là hoàn thiện cho đến khi thiết kế hoàn thành.",
        "Từ khi bắt đầu triển khai dự án cho đến khi kết thúc giai đoạn xác định yêu cầu."
      ],
      "answer": 1,
      "explanation": "Quản lý thay đổi bắt đầu hoạt động ngay từ khi sản phẩm/tài liệu đầu tiên (như bản đặc tả SRS) được chính thức phê duyệt."
    },
    {
      "id": 23,
      "question": "Các thay đổi ảnh hưởng đến việc chạy thử các trường hợp biên có thể dẫn đến dạng hiệu ứng lề nào của công việc bảo trì?",
      "options": [
        "Hiệu ứng lề của việc thay đổi tài liệu",
        "Hiệu ứng lề của việc thay đổi biên",
        "Hiệu ứng lề của việc thay đổi mã nguồn",
        "Hiệu ứng lề của việc thay đổi dữ liệu"
      ],
      "answer": 2,
      "explanation": "Chạy thử biên thất bại sau khi sửa code nghĩa là logic thuật toán bị sai, dẫn tới hiệu ứng lề mã nguồn (Source code side effect)."
    },
    {
      "id": 24,
      "question": "Định nghĩa lại các hằng số cục bộ và hằng số địa phương có thể dẫn đến dạng hiệu ứng lề nào của công việc bảo trì?",
      "options": [
        "Hiệu ứng lề của việc thay đổi tài liệu",
        "Hiệu ứng lề của việc định nghĩa lại",
        "Hiệu ứng lề của việc thay đổi dữ liệu",
        "Hiệu ứng lề của việc thay đổi mã nguồn"
      ],
      "answer": 2,
      "explanation": "Hằng số hoặc biến môi trường bị định nghĩa lại làm thay đổi giá trị bộ nhớ, tạo nên hiệu ứng lề dữ liệu (Data side effect)."
    },
    {
      "id": 25,
      "question": "Định nghĩa lại cấu trúc bản ghi hay cấu trúc file có thể dẫn đến dạng hiệu ứng lề nào của công việc bảo trì?",
      "options": [
        "Hiệu ứng lề của việc định nghĩa",
        "Hiệu ứng lề của việc thay đổi mã nguồn",
        "Hiệu ứng lề của việc thay đổi dữ liệu",
        "Hiệu ứng lề của việc thay đổi tài liệu"
      ],
      "answer": 2,
      "explanation": "Cấu trúc bản ghi hoặc Database thay đổi thì cách đọc/ghi dữ liệu bị lệch lạc, gây lỗi luồng dữ liệu (Data side effect)."
    }
  ]
};
