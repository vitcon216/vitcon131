const questionsDB = {
  "1": [],
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
      "answer": 0,
      "explanation": "Theo giáo trình: Mục tiêu của chương này là giới thiệu về quy trình khảo sát, phân tích và đặc tả yêu cầu của phần mềm. Với sản phẩm phần mềm được xây dựng, việc hiểu ..."
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
      "explanation": "Giai đoạn thiết kế đóng vai trò quyết định, chịu trách nhiệm tới 80% đối với sự thành công và chất lượng lâu dài của sản phẩm.."
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
      "explanation": "Giai đoạn thiết kế nhận đầu vào là tài liệu yêu cầu (kết quả phân tích) và chuyển đổi chúng thành dạng biểu diễn hệ thống phần mềm.."
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
      "answer": 1,
      "explanation": "Theo giáo trình: Thiết kế cấu trúc dữ liệu: Các cấu trúc dữ liệu được dùng trong việc thực hiện hệ thống được thiết kế chi tiết và được đặc tả ở đây...."
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
      "explanation": "Về kỹ thuật, thiết kế gồm: Thiết kế dữ liệu, Thiết kế kiến trúc, Thiết kế thủ tục, Thiết kế đối tượng, và Thiết kế giao diện.."
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
      "explanation": "Tiến trình thiết kế đi từ mức trừu tượng cao đến chi tiết: Phác thảo phi hình thức, Thiết kế phi hình thức, Thiết kế hình thức, Thiết kế hoàn chỉnh.."
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
      "explanation": "Đặc tả trừu tượng là việc định nghĩa các dịch vụ mà mỗi hệ thống con phải cung cấp cùng các ràng buộc hoạt động của chúng.."
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
      "explanation": "Thiết kế cấu trúc dữ liệu là việc chi tiết hóa và đặc tả các cấu trúc lưu trữ và tổ chức dữ liệu sẽ sử dụng trong chương trình.."
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
      "explanation": "Thiết kế giao diện xác định và ghi chép tài liệu về cách thức các hệ thống con giao tiếp và trao đổi dữ liệu với nhau.."
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
      "explanation": "Thiết kế thành phần (component design) phân chia các dịch vụ của hệ thống con thành các thành phần nhỏ hơn, độc lập.."
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
      "explanation": "Thiết kế phần mềm gồm hai nhiệm vụ: Xác định kiến trúc tổng thể và chọn lựa cách thức thực hiện (thuật toán, cấu trúc) cho từng thành phần.."
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
      "explanation": "Thiết kế là quá trình đưa ra quyết định chọn lựa."
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
      "answer": 0,
      "explanation": "Theo giáo trình: Thành phần Giao diện..."
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
      "explanation": "Bản thiết kế giao diện mô tả cả nội dung, hình thức hiển thị (màn hình) lẫn các giao tác (luồng đi) và xử lý tương ứng khi người dùng tương tác.."
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
      "explanation": "Thiết kế thành phần xử lý bao gồm việc định nghĩa hệ thống các kiểu dữ liệu và hệ thống các hàm/thủ tục thực hiện xử lý.."
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
      "explanation": "Thiết kế dữ liệu xác định dạng lưu trữ (file, database) và quan hệ các bảng."
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
      "explanation": "Bản thiết kế dùng làm cơ sở thực hiện chi tiết, liên lạc giữa các nhóm và bảo trì."
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
      "explanation": "Thiết kế hướng đối tượng (OOD) là phương pháp thiết kế hệ thống dựa trên các đối tượng."
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
      "answer": 3,
      "explanation": "Chất lượng thiết kế được đánh giá qua: Sự kết dính (Cohesion), Sự ghép nối (Coupling), Sự hiểu được (Understandability), Tính thích nghi (Adaptability).."
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
      "explanation": "Trong OOD, các đối tượng hoạt động độc lập và chỉ tương tiếp/giao tiếp với nhau thông qua việc gửi và nhận các thông điệp (messages).."
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
      "answer": 3,
      "explanation": "Theo giáo trình: Các đối tượng là các thành phần dùng lại được thích hợp do tính độc lập của chúng và khả năng kế thừa cao...."
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
      "answer": 1,
      "explanation": "Theo giáo trình: Cách tiếp cận hướng chức năng hay hướng đối tượng là bổ sung và hỗ trợ cho nhau chứ không phải là đối kháng nhau. Kỹ sư phần mềm sẽ chọn cách tiếp cận..."
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
      "answer": 1,
      "explanation": "Theo giáo trình: -Dễ thử nghiệm..."
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
      "answer": 3,
      "explanation": "Theo giáo trình: Phương pháp phát triển dựa trên thành phần gần tương tự như phương pháp phát triển hướng đối tượng. Hoạt động công nghệ bắt đầu với sự chỉ ra các lớp ..."
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
      "answer": 1,
      "explanation": "Theo giáo trình: Công nghệ phản hồi - Reverse engineering - đối với phần mềm là đơn giản. Trong nhiều trường hợp, chương trình được tổ chức ngược không phải thuộc nhà ..."
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
      "explanation": "Kiến trúc phần mềm thể hiện qua các mô hình cấu trúc, xử lý, động."
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
      "explanation": "Cấp bậc điều khiển (Control hierarchy/Program structure) thể hiện sự tổ chức và phân cấp quản lý giữa các mô-đun trong chương trình.."
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
      "explanation": "Thủ tục phần mềm tập trung vào việc mô tả luồng xử lý chi tiết bên trong của từng mô-đun riêng biệt."
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
      "explanation": "Thiết kế dữ liệu phải đi trước vì cấu trúc dữ liệu ảnh hưởng sâu sắc đến cách thiết kế các thuật toán và thành phần xử lý.."
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
      "explanation": "Ma trận truy vết yêu cầu (Requirement traceability matrix) dùng để đối chiếu đảm bảo mọi yêu cầu trong SRS đều được thiết kế.."
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
      "answer": 1,
      "explanation": "Theo giáo trình: Ứng dụng cơ sở dữ liệu được sử dụng như một ứng dụng xử lý câu hỏi về dữ liệu. Ngôn ngữ truy vấn dữ liệu chuẩn SQL cho phép người sử dụng đặt câu hỏi ..."
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
      "explanation": "Kho dữ liệu (Data Warehouse) có đặc trưng là tích hợp thông tin từ nhiều nguồn và dữ liệu có tính lịch sử, không thường xuyên thay đổi.."
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
      "answer": 0,
      "explanation": "Theo giáo trình: Xác định yêu cầu: đây là một khẳng định, bằng ngôn ngữ tự nhiên hơn là các sơ đồ, về các dịch vụ hệ thống cần cung cấp và các ràng buộc mà hệ thống ph..."
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
      "explanation": "Để chọn mẫu kiến trúc phù hợp, kỹ sư phải khám phá các đặc trưng hoạt động và các ràng buộc phi chức năng của hệ thống.."
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
      "answer": 3,
      "explanation": "Các phương pháp thiết kế phần mềm gồm thiết kế tổng quát và thiết kế chi tiết."
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
      "answer": 2,
      "explanation": "Theo giáo trình: Thiết kế giao diện khác với thiết kế các chức năng khác của phần mềm ở điểm hướng tới người sử dụng, cần người sử dụng đánh giá. Các công đoạn thiết k..."
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
      "explanation": "Thiết kế trực tiếp đơn giản, chuyển trực tiếp yêu cầu thành thiết kế nên chỉ phù hợp với các ứng dụng có quy mô nhỏ.."
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
      "explanation": "Trong thiết kế gián tiếp, giai đoạn thiết kế nhận một phần kết quả từ xác định yêu cầu, phần chính yếu phải qua phân tích hệ thống chi tiết.."
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
      "explanation": "Thiết kế gián tiếp có quy trình phân tích trung gian chặt chẽ nên phù hợp và cần thiết cho các dự án phần mềm quy mô lớn.."
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
      "explanation": "Đầu ra thiết kế xử lý gồm danh sách các hàm, kiểu dữ liệu và mô tả chi tiết của chúng."
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
      "answer": 1,
      "explanation": "Theo giáo trình: Mục tiêu của chương này là giới thiệu một số phương pháp và kỹ thuật chính trong thiết kế phần mềm, đối với việc triển khai một hệ thống thành nhiều h..."
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
      "explanation": "Mô tả màn hình giao diện cần đầy đủ: Tên màn hình, nội dung thông tin, hình thức trình bày và các thao tác người dùng có thể thực hiện.."
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
      "explanation": "Tính nhất quán giao diện yêu cầu các nút/thành phần giống nhau phải đồng bộ về vị trí, ngôn ngữ hiển thị, hình dáng, màu sắc và cách kích hoạt.."
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
      "answer": 2,
      "explanation": "Theo giáo trình: Tính hiệu quả của trình biên dịch nằm ở tính hiệu quả của mã assembler nhận được sau khi dịch. Tính hiệu quả đó thay đổi tuỳ theo ngôn ngữ và nhà sản ..."
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
      "answer": 0,
      "explanation": "Theo giáo trình: Định nghĩa yêu cầu phi chức năng: các ràng buộc về phần mềm và các hạn chế đối với thiết kế cần phải được mô tả trong phần này. Nó có thể bao gồm các ..."
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
      "answer": 2,
      "explanation": "Thông báo lỗi tốt nên đi kèm với các dấu hiệu trực quan (màu đỏ, nhấp nháy) hoặc âm thanh để người dùng dễ dàng nhận biết.."
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
      "explanation": "Thiết kế giao diện giống như bản vẽ bố trí nội thất/cửa, giúp người dùng hình dung cách tương tác trực tiếp với ngôi nhà.."
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
      "answer": 0,
      "explanation": "Theo giáo trình: Trong phạm vi thiết kế sơ bộ và chi tiết, có xuất hiện một số hoạt động thiết kế khác nhau. Bên cạnh việc thiết kế dữ liệu, kiến trúc và thủ tục, nhiề..."
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
      "explanation": "Chiến lược thiết kế hướng chức năng (cấu trúc) sử dụng các vùng dữ liệu dùng chung (global data) cho các mô-đun cùng truy cập.."
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
      "explanation": "Mô hình kho dữ liệu (Repository model) sử dụng một cơ sở dữ liệu trung tâm cho phép tất cả các phân hệ truy cập và trao đổi thông tin.."
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
      "explanation": "Thiết kế dữ liệu ở mức thành phần tập trung vào cấu trúc dữ liệu nội bộ và thuộc tính, việc thiết kế CSDL tổng thể thuộc mức kiến trúc.."
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
      "explanation": "Bản thiết kế tốt phải bao phủ toàn bộ yêu cầu trong SRS và cung cấp mô tả chi tiết, rõ ràng để lập trình viên cài đặt.."
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
      "explanation": "Để phân tích tác vụ người dùng khi thiết kế UI, việc quan sát trực tiếp thao tác thực tế của họ là hướng tiếp cận hiệu quả nhất.."
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
      "explanation": "Đặc trưng của thiết kế tốt là thực hiện đầy đủ các yêu cầu chức năng và phi chức năng đã được chỉ ra trong pha phân tích.."
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
      "explanation": "Phương pháp thiết kế cung cấp ký hiệu, nguyên tắc đánh giá và heuristic tinh chế."
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
      "answer": 0,
      "explanation": "Theo giáo trình: Thiết kế giao diện khác với thiết kế các chức năng khác của phần mềm ở điểm hướng tới người sử dụng, cần người sử dụng đánh giá. Các công đoạn thiết k..."
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
      "explanation": "Biểu đồ luồng dữ liệu (DFD) biểu diễn các chức năng (tiến trình) biến đổi và luân chuyển các dòng dữ liệu trong hệ thống.."
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
      "explanation": "Tài liệu thiết kế chi tiết (Detailed Design Document) là kết quả được tạo ra trong pha thiết kế hệ thống làm cơ sở trực tiếp cho cài đặt.."
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
      "explanation": "Các quan hệ chuẩn trong thiết kế CSDL quan hệ gồm: 1-1, 1-n, n-n."
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
      "explanation": "Các quan hệ chuẩn trong thiết kế CSDL quan hệ gồm: 1-1, 1-n, n-n."
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
      "explanation": "Các quan hệ chuẩn trong thiết kế CSDL quan hệ gồm: 1-1, 1-n, n-n."
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
      "explanation": "Tạo liên kết giữa các bảng (khóa ngoại) nhằm đảm bảo tính ràng buộc toàn vẹn dữ liệu trong cơ sở dữ liệu.."
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
      "explanation": "Khóa chính (Primary Key) của mỗi bảng được thiết lập để định danh duy nhất và phân biệt giữa các bản ghi (dòng dữ liệu) với nhau.."
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
      "explanation": "Khóa ngoại (Foreign Key) đóng vai trò như một con trỏ trỏ tới khóa chính của bảng khác để thiết lập mối quan hệ giữa hai bảng.."
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
      "explanation": "Thống kê cho thấy phần lớn các dự án phần mềm thất bại ở khâu Thiết kế và Xác định yêu cầu (do sai kiến trúc hoặc sai yêu cầu người dùng).."
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
      "explanation": "Một chương trình được cài đặt tốt sẽ đem lại cho ta nhiều thuận lợi trong công việc bảo trì (sửa lỗi, nâng cấp) sau này.."
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
      "answer": 3,
      "explanation": "Theo giáo trình: Không ảnh hưởng gì đến chất lượng phần mềm Câu 2. Phong cách lập trình nào được xem là tốt?..."
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
      "answer": 3,
      "explanation": "Theo giáo trình: Sử dụng các câu lệnh phức tạp chứng tỏ được khả năng am hiểu ngôn ngữ lập trình của lập trình viên...."
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
      "explanation": "Chuẩn hóa thứ tự khai báo dữ liệu giúp lập trình viên dễ theo dõi, thuận lợi cho việc kiểm thử, gỡ rối và bảo trì.."
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
      "explanation": "Việc xây dựng các câu lệnh nên tuân theo phong cách lập trình cấu trúc (mỗi khối có 1 lối vào, 1 lối ra duy nhất) để dễ kiểm soát logic.."
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
      "answer": 0,
      "explanation": "Theo giáo trình: Tránh dùng các phép kiểm tra điều kiện phức tạp..."
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
      "explanation": "Ngôn ngữ thế hệ thứ nhất (mã máy/hợp ngữ) giao tiếp trực tiếp với phần cứng nên tốc độ xử lý nhanh và không yêu cầu cấu hình phần cứng mạnh.."
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
      "explanation": "Theo giáo trình trang 80, các ngôn ngữ thế hệ thứ hai được đặc trưng bởi việc sử dụng rộng rãi thư viện phần mềm khổng lồ và nó cũng đã được chấp nhận rộng rãi.."
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
      "answer": 1,
      "explanation": "Theo giáo trình: Các ngôn ngữ thế hệ thứ ba: còn được gọi là ngôn ngữ lập trình hiện đại hay có cấu trúc. Nó được đặc trưng bởi khả năng cấu trúc dữ liệu và thủ tục mạ..."
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
      "explanation": "SQL (Structured Query Language) là ngôn ngữ hỏi đáp khai báo chuyên biệt dùng để truy vấn dữ liệu trong các hệ quản trị cơ sở dữ liệu.."
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
      "answer": 1,
      "explanation": "Theo giáo trình: Ngôn ngữ lập trình theo phong cách logic..."
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
      "explanation": "Prolog là ngôn ngữ lập trình khai báo tiêu biểu theo phong cách logic (Logic programming), giải quyết bài toán bằng luật và sự kiện.."
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
      "explanation": "Ngôn ngữ lập trình hướng đối tượng (ở đây nói về C++) có phần mở rộng tệp mã nguồn là *.cpp."
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
      "explanation": "Tệp tin mở rộng *.cpp là viết tắt của C Plus Plus, dùng cho ngôn ngữ lập trình hướng đối tượng C++."
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
      "explanation": "Prolog (Programming Logic) là ngôn ngữ lập trình logic chuyên biệt cho các bài toán trí tuệ nhân tạo và hệ chuyên gia.."
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
      "explanation": "Lập trình cấu trúc có 3 đặc trưng cơ bản: Tính đơn thể (modules), Cấu trúc điều khiển chuẩn (tuần tự, rẽ nhánh, lặp) và Lối vào/ra đơn.."
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
      "explanation": "Lập trình hướng đối tượng (OOP) cho phép kết hợp cả dữ liệu (thuộc tính) và hành vi (phương thức) vào trong thực thể đối tượng.."
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
      "answer": 1,
      "explanation": "Theo giáo trình: Các lỗi lập trình: Có rất nhiều lý do dẫn đến việc các lập trình viên gây ra các lỗi lập trình. Những lý do này bao gồm: sự hiểu sai các tài liệu thiế..."
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
      "answer": 0,
      "explanation": "Theo giáo trình: Vào/ra hướng bản ghi đọc hoặc ghi các bản ghi vật lý, bản ghi này có thể chứa đựng một hoặc nhiều bản ghi logic. Các bản ghi (hoặc là bộ trong đại số ..."
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
      "answer": 1,
      "explanation": "Theo giáo trình: Kiểm tra kiểu giả chặt chẽ (Pseudostrong type checking) là mức thứ ba của kiểm tra kiểu, nó cho phép thao tác các đối tượng dữ liệu thuộc cùng một kiể..."
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
      "answer": 1,
      "explanation": "Theo giáo trình: Tính cô đọng của ngôn ngữ nằm ở sự ngắn gọn. Các đặc trưng của chương trình bao gồm sự kết cấu có cấu trúc, từ khoá và viết tắt, hàm có sẵn, đã đơn gi..."
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
      "answer": 1,
      "explanation": "Theo giáo trình: Kiểu Boolean sinh ra giá trị nhị phân True, False dựa trên so sánh logic. Pointer là địa chỉ của chương trình khác hoặc cấu trúc dữ liệu mà được dùng ..."
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
      "answer": 0,
      "explanation": "Theo giáo trình: Vào/ra hướng mảng là đọc và ghi chuỗi các trường được giả thiết là kiểu mảng, người sử dụng có nhiệm vụ định nghĩa và thao tác kiểu dữ liệu của mảng. ..."
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
      "answer": 2,
      "explanation": "Theo giáo trình: Ngoài ra, trong quá trình phân tích, nghiên cứu tài liệu, nếu có câu hỏi phát sinh hay đề xuất giải quyết, QA team sẽ đưa ra câu hỏi với các bên liên ..."
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
      "answer": 1,
      "explanation": "Theo giáo trình: Các ngôn ngữ thế hệ thứ hai: được phát triển từ cuối những năm 1950 đến đầu những năm 1960, như FORTRAN, COBOL, ALGOL, BASIC, ... Nó được xem là nền t..."
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
      "answer": 1,
      "explanation": "Theo giáo trình: Các ngôn ngữ thế hệ thứ hai: được phát triển từ cuối những năm 1950 đến đầu những năm 1960, như FORTRAN, COBOL, ALGOL, BASIC, ... Nó được xem là nền t..."
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
      "answer": 1,
      "explanation": "Theo giáo trình: Là ngôn ngữ thế hệ bốn bao gồm một Database Engine cùng ngôn ngữ hỏi đáp tương thích với SQL, bộ hiển thị, hệ hỗ trợ đồ hoạ, thiết kế, bảo trì và các ..."
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
      "answer": 1,
      "explanation": "Theo giáo trình: Là ngôn ngữ thế hệ bốn bao gồm một Database Engine cùng ngôn ngữ hỏi đáp tương thích với SQL, bộ hiển thị, hệ hỗ trợ đồ hoạ, thiết kế, bảo trì và các ..."
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
      "answer": 1,
      "explanation": "Theo giáo trình: Prolog và các ngôn ngữ suy diễn khác tuy đơn giản trong việc mô tả và phát triển các luật đơn nhưng không tầm thường trong việc quyết định kết hợp các..."
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
      "explanation": "Biến (Variable) là một đại lượng được đặt tên và có giá trị có thể thay đổi trong quá trình thực thi chương trình.."
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
      "answer": 2,
      "explanation": "Theo giáo trình: Kiểm tra kiểu dữ liệu là việc ngôn ngữ kiểm tra sự phù hợp của kiểu dữ liệu được định nghĩa trong các phép toán học và các toán tử logic. Có bốn mức k..."
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
      "explanation": "JSP (Java Server Pages) là công nghệ và phần mở rộng tệp tin dùng để xây dựng các trang web động sử dụng ngôn ngữ Java.."
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
      "answer": 1,
      "explanation": "Theo giáo trình: Khi một thiết kế thủ tục chi tiết được biểu diễn bằng cách dùng một ngôn ngữ thiết kế chương trình thì tài liệu thiết kế có thể được nhúng trực tiếp v..."
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
      "answer": 3,
      "explanation": "Theo giáo trình: Bước 5: Áp dụng tính kế thừa: xây dựng các lớp trừu tượng có các thuộc tính chung, đây là một khâu đặc trưng của thiết kế hướng đối tượng...."
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
      "explanation": "Dòng chú thích (comment) dùng để giải thích mã nguồn giúp con người dễ đọc hiểu, chương trình biên dịch sẽ bỏ qua chúng khi chạy.."
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
      "explanation": "Quản lý sách liên quan chặt chẽ đến lưu trữ dữ liệu, vì vậy cần định hướng dùng ngôn ngữ lập trình hướng cơ sở dữ liệu.."
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
      "explanation": "Theo giáo trình trang 77, độ phức tạp và việc tổ chức cấu trúc dữ liệu được xác định trong bước Thiết kế phần mềm.."
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
      "explanation": "Theo giáo trình trang 77, phong cách khai báo dữ liệu được thiết lập khi chương trình được sinh ra (bước cài đặt/lập trình).."
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
      "explanation": "Trong ngôn ngữ lập trình, dữ liệu được phân chia theo phạm vi truy cập thành dữ liệu toàn cục (global) và dữ liệu cục bộ (local).."
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
      "explanation": "Cấp phát bộ nhớ động (dynamic memory allocation) cho phép hệ thống chỉ cấp phát bộ nhớ khi chương trình chạy và thực sự có nhu cầu.."
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
      "explanation": "Cách thức cài đặt vào/ra (I/O) tác động trực tiếp đến giao tiếp của người dùng, nên có ảnh hưởng lớn nhất đến người sử dụng hệ thống.."
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
      "answer": 2,
      "explanation": "Theo giáo trình: Sự tương đương của các chương trình trong việc mã hoá bởi các cấu trúc điều khiển đã được chỉ ra ở định lý Boehm&Jaccopini như sau: Mọi chương trình P..."
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
      "explanation": "Đoạn mã có một vòng lặp chạy từ 1 đến n với các phép toán bên trong tốn thời gian hằng số O(1), do đó độ phức tạp là O(n).."
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
      "explanation": "Đoạn mã chỉ chứa một biểu thức gán công thức toán học thực hiện trong thời gian hằng số, do đó độ phức tạp là O(1).."
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
      "explanation": "Đoạn mã chứa hai vòng lặp lồng nhau chạy lần lượt n và m lần, do đó độ phức tạp thuật toán là O(n*m).."
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
      "explanation": "Đoạn mã chỉ là biểu thức tính toán số học hằng số, chạy trong thời gian hằng số, do đó độ phức tạp là O(1).."
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
      "explanation": "Đoạn mã chứa ba vòng lặp lồng nhau đều chạy tối đa n lần, do đó độ phức tạp thuật toán là O(n^3)."
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
      "explanation": "Đoạn mã chỉ chứa một vòng lặp chạy n lần từ 0 đến n-1, do đó độ phức tạp thuật toán là O(n)."
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
      "explanation": "Đoạn mã chứa hai vòng lặp lồng nhau đều chạy n lần từ 0 đến n-1, do đó độ phức tạp thuật toán là O(n^2).."
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
      "explanation": "Đoạn mã chứa hai vòng lặp lồng nhau chạy n lần từ 1 đến n, do đó độ phức tạp thuật toán là O(n^2)."
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
      "explanation": "Đoạn mã chỉ chứa câu lệnh gán phép tính số học chạy trong thời gian hằng số, do đó độ phức tạp thuật toán là O(1).."
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
      "explanation": "Đoạn mã chỉ chứa phép chia lấy dư mod số học chạy trong thời gian hằng số, do đó độ phức tạp thuật toán là O(1).."
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
      "explanation": "Đoạn mã chứa ba vòng lặp lồng nhau chạy n lần, do đó độ phức tạp thuật toán là O(n^3)."
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
      "explanation": "Đoạn mã chứa ba vòng lặp lồng nhau chạy n lần, do đó độ phức tạp thuật toán là O(n^3)."
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
      "explanation": "Đoạn mã chứa hai vòng lặp lồng nhau chạy n và m lần, do đó độ phức tạp thuật toán là O(n*m)."
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
      "explanation": "Đoạn mã chứa hai vòng lặp lồng nhau chạy n và m lần, do đó độ phức tạp thuật toán là O(n*m)."
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
      "explanation": "Định nghĩa chương trình tuần tự là bộ biến đổi tuần tự P để chuyển dữ liệu vào x thành ra y trong đó x và y hoàn toàn được xác định trước.."
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
      "explanation": "Tiên đề gán định nghĩa luật biến đổi trạng thái và điều kiện sau khi thực hiện lệnh gán giá trị của biểu thức cho một biến.."
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
      "explanation": "Tiên đề rẽ nhánh định nghĩa luật đúng đắn cho cấu trúc điều kiện dạng đủ (if-then-else) dựa trên cả hai nhánh đúng và sai.."
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
      "explanation": "Tiên đề lặp (loop axiom) sử dụng khái niệm bất biến vòng lặp (loop invariant) để chứng minh tính đúng đắn của vòng lặp while.."
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
      "explanation": "Tiên đề về tính bất biến của chương trình chứng minh rằng một đoạn chương trình P không làm thay đổi trạng thái của tính chất {A}.."
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
      "explanation": "QA (Quality Assurance - Đảm bảo chất lượng) là hệ thống các hoạt động lên kế hoạch, giám sát quy trình để đảm bảo chất lượng sản phẩm.."
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
      "answer": 0,
      "explanation": "Theo giáo trình: Kiểm thử chấp nhận của người dùng được định nghĩa là một loại kiểm thử thực hiện bởi khách hàng để xác nhận hệ thống đã làm việc đúng như mong đợi và ..."
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
      "explanation": "Lỗi chiến lược (strategic error) là lỗi nghiêm trọng xuất phát từ việc hiểu sai yêu cầu hoặc ý đồ thiết kế hệ thống bị sai ngay từ đầu.."
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
      "explanation": "Lỗi cú pháp (syntax error) là lỗi vi phạm quy tắc ngữ pháp của ngôn ngữ lập trình và bị phát hiện ngay khi biên dịch.."
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
      "explanation": "Hiệu ứng phụ (side effect) xảy ra khi một hàm/chương trình con thay đổi giá trị của một biến ngoài ý muốn của lập trình viên.."
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
      "answer": 0,
      "explanation": "Theo giáo trình: + Phân tích hệ quả của các thất bại...."
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
      "answer": 0,
      "explanation": "Thử nghiệm tĩnh (reliability testing) nhằm mục tiêu đánh giá và xác định độ tin cậy tổng thể của phần mềm.."
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
      "explanation": "Quá trình đánh giá độ tin cậy diễn ra tuần tự: Xác định độ đo -> Sinh dữ liệu thử -> Chạy thử ghi nhận thất bại -> Tính toán độ tin cậy.."
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
      "explanation": "Phần mềm an toàn sinh mệnh thứ cấp (secondary safety-critical) là phần mềm gián tiếp gây ra tai nạn (ví dụ: lỗi CSDL y tế).."
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
      "explanation": "Lập trình phòng thủ (defensive programming) giả định mã nguồn luôn có thể chứa lỗi và chủ động viết mã kiểm tra để tránh sụp đổ hệ thống.."
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
      "explanation": "Hoạt động xác minh (Verification) và thẩm định (Validation) - V&V - là một quá trình liên tục diễn ra suốt toàn bộ vòng đời phần mềm.."
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
      "answer": 2,
      "explanation": "Theo giáo trình: Một số công ty phát triển phần mềm thường bỏ qua bước này vì ngân sách eo hẹp và cho rằng nó sẽ không dẫn đến hậu quả lớn. Nhưng để tạo những trải ngh..."
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
      "answer": 2,
      "explanation": "Theo giáo trình: Công việc bảo trì đầu tiên cần phải thực hiện là do việc kiểm tra chương trình không thể tránh được mội lỗi ẩn chứa bên trong một hệ phần mềm lớn. Tro..."
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
      "explanation": "Quy trình đặc tả độ tin cậy: Phân tích hệ quả thất bại -> Phân nhóm thất bại -> Thiết lập yêu cầu độ tin cậy bằng độ đo tương ứng.."
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
      "explanation": "Độ tin cậy là đặc trưng động, được tính toán dựa trên tần suất xuất hiện các thất bại (failures) của phần mềm khi chạy.."
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
      "explanation": "Ước lượng thời gian hoàn thành sai là lỗi quản trị dự án, không phải lỗi kỹ thuật (software defect) nằm trong mã nguồn phần mềm.."
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
      "explanation": "Kiểm thử phần mềm hướng tới hai mục tiêu: phát hiện việc phần mềm không làm đúng yêu cầu, hoặc làm những việc không được yêu cầu.."
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
      "explanation": "Một ca kiểm thử thành công là ca kiểm thử phát hiện ra được những lỗi mới chưa từng được biết đến trước đó.."
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
      "explanation": "Kiểm tra phát triển do đội dự án thực hiện gồm: kiểm tra đơn vị, kiểm tra tích hợp, kiểm tra hệ thống."
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
      "explanation": "Kiểm tra độc lập do bên thứ ba hoặc khách hàng thực hiện gồm hoạt động Đảm bảo chất lượng (QA) và Kiểm thử chấp nhận (Acceptance test).."
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
      "explanation": "Kiểm thử hộp trắng (White-box testing) tập trung vào cấu trúc logic, đường chạy và giải thuật bên trong mã nguồn.."
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
      "explanation": "Kiểm thử từ trên xuống (Top-down integration) bắt đầu từ module điều khiển chính và sử dụng các module giả lập (stubs) để thay thế.."
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
      "explanation": "Đoán lỗi (error guessing) là kỹ thuật kiểm thử hộp đen dựa trên kinh nghiệm."
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
      "explanation": "Kiểm thử tích hợp từ trên xuống (Top-down) giúp tích hợp giao diện người dùng sớm, thuận lợi cho việc kiểm tra màn hình và demo khách hàng.."
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
      "explanation": "Kiểm thử phần mềm là tiến trình thực thi chương trình với mục đích đánh giá xem hệ thống có thỏa mãn các yêu cầu đã đặt ra hay không.."
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
      "explanation": "Với hệ thống lớn, kiểm thử được chia làm 5 bước: Thử đơn vị, Thử module, Thử hệ con, Thử hệ thống, và Thử nghiệm thu.."
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
      "explanation": "Bộ kiểm toán mã (Code auditor) là công cụ tự động phân tích mã nguồn để kiểm tra xem nó có tuân thủ các quy chuẩn lập trình tối thiểu hay không.."
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
      "explanation": "Đội kiểm thử độc lập (IV&V) không bị ảnh hưởng bởi tư duy của lập trình viên nên sẽ thiết kế test case khách quan và triệt để hơn.."
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
      "explanation": "Thẩm định (Validation) nhằm mục đích trả lời câu hỏi: 'Sản phẩm có làm đúng những gì khách hàng thực sự mong muốn hay không?'.."
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
      "answer": 2,
      "explanation": "Theo giáo trình: Kiểm thử tích hợp (Integration testing) hay còn gọi là tích hợp và kiểm thử (integration and testing, viết tắt: I&T) là một giai đoạn trong kiểm thử p..."
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
      "explanation": "Kiểm thử điều kiện (condition testing) hướng tới kiểm tra toàn bộ các nhánh điều kiện luận lý (boolean expressions) có trong module.."
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
      "explanation": "Kiểm thử dòng dữ liệu (data flow testing) lựa chọn các đường dẫn kiểm thử dựa trên các vị trí định nghĩa và sử dụng của các biến.."
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
      "explanation": "Chiến lược kiểm thử tốt nhất là tiến hành lập kế hoạch và thực hiện các hoạt động kiểm thử song song với mọi giai đoạn phát triển.."
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
      "explanation": "Kiểm thử chấp nhận (Acceptance testing) được thực hiện bởi người dùng cuối để quyết định xem có tiếp nhận bàn giao hệ thống hay không.."
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
      "explanation": "Trong kiểm thử giá trị biên robust cho n biến độc lập, số lượng test case cần thiết là 6n + 1 (hoặc xấp xỉ 6n trường hợp).."
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
      "explanation": "Đoạn mã có 3 nhánh rẽ logic độc lập, do đó cần tối thiểu 3 test case để đạt độ bao phủ quyết định (decision coverage) 100%.."
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
      "explanation": "Phân tích giá trị biên (BVA) kiểm tra tại các điểm ranh giới của miền xác định: {min-, min, min+, max-, max, max+}.."
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
      "explanation": "Với biên đóng [a, b], các giá trị kiểm thử biên tương ứng được chọn là: a-1, a, a+1, b-1, b, b+1."
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
      "explanation": "Với miền xác định [10, 100], các giá trị biên tương ứng là: 9, 10, 11 (quanh biên 10) và 99, 100, 101 (quanh biên 100).."
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
      "explanation": "Với miền mở 'b' < x < 'n', tương đương biên đóng 'c' <= x <= 'm'."
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
      "explanation": "Với miền 0 < x <= 1000, tương đương biên đóng 1 <= x <= 1000."
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
      "answer": 1,
      "explanation": "Theo giáo trình: Chỉ ra được cận dưới của thuật toán,..."
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
      "answer": 3,
      "explanation": "Kiểu dữ liệu do người dùng tự định nghĩa (user-defined types) chỉ có giá trị sử dụng trong phạm vi chương trình/ứng dụng đó.."
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
      "answer": 3,
      "explanation": "Theo giáo trình: Đoán lỗi (Error Guessing)..."
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
      "explanation": "Với biên 50 <= y < 500 (biên đóng ở 50, biên mở ở 500, tương đương 499)."
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
      "explanation": "Với biên đóng 0 <= i <= 500. Các giá trị biên tương ứng là: -1, 0, 1, 499, 500, 501."
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
      "explanation": "Với biên -6 <= y < 600 (tương đương biên đóng từ -6 đến 599)."
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
      "explanation": "Với biên đóng -10 <= a <= 800. Các giá trị biên tương ứng được chọn là: -11, -10, -9, 799, 800, 801."
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
      "explanation": "Chương trình tuần tự P nhận đầu vào x và chuyển thành đầu ra y, trong đó cả x và y đều phải được xác định rõ ràng từ trước.."
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
      "explanation": "Tiên đề gán định nghĩa luật biến đổi trạng thái sau khi thực hiện câu lệnh gán giá trị của biểu thức cho biến.."
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
      "explanation": "Tiên đề rẽ nhánh (if-then-else) định nghĩa luật kiểm tra tính đúng đắn cho cả hai nhánh rẽ (True và False) của điều kiện.."
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
      "explanation": "Mệnh đề rẽ nhánh dạng đủ (if-then-else) chứng minh rằng cả hai hướng chạy đều dẫn đến trạng thái dữ liệu đầu ra {B} mong muốn.."
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
      "explanation": "Tiên đề lặp (while-do) sử dụng bất biến vòng lặp {A} để chứng minh tính đúng đắn và trạng thái sau khi kết thúc vòng lặp {A, !E}.."
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
      "explanation": "Tiên đề về tính bất biến chứng minh rằng đoạn chương trình P không làm thay đổi hay phá vỡ thuộc tính dữ liệu {A}.."
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
      "explanation": "QC (Quality Control) tập trung vào các hoạt động kỹ thuật cụ thể nhằm đánh giá, kiểm tra chất lượng của sản phẩm đầu ra.."
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
      "explanation": "QA (Quality Assurance) là hệ thống các hoạt động lên kế hoạch, giám sát quy trình phát triển để ngăn ngừa lỗi xảy ra từ đầu.."
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
      "answer": 1,
      "explanation": "Theo giáo trình: Xây dựng không gian giải pháp cho vấn đề..."
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
      "explanation": "Bảo trì thích ứng (Adaptive maintenance) là hoạt động sửa đổi phần mềm để tương thích với những thay đổi của môi trường phần cứng/phần mềm.."
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
      "answer": 0,
      "explanation": "Theo giáo trình: Trong thực tế của hoạt động bảo trì, các nhiệm vụ được làm như một phần của bảo trì tiếp hợp và bảo trì hoàn thiện cũng giống như các nhiệm vụ cần làm..."
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
      "answer": 0,
      "explanation": "Theo giáo trình: Bảo trì cấu trúc dữ liệu của phần mềm..."
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
      "answer": 2,
      "explanation": "Theo giáo trình: với  M = toàn bộ các công việc cho việc bảo trì; p = công việc làm (như miêu tả ở trên);..."
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
      "answer": 2,
      "explanation": "Theo giáo trình: với  M = toàn bộ các công việc cho việc bảo trì; p = công việc làm (như miêu tả ở trên);..."
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
      "answer": 2,
      "explanation": "Theo giáo trình: Trong thực tế của hoạt động bảo trì, các nhiệm vụ được làm như một phần của bảo trì tiếp hợp và bảo trì hoàn thiện cũng giống như các nhiệm vụ cần làm..."
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
      "explanation": "Theo giáo trình: Hiệu ứng lề của việc thay đổi chương trình con..."
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
      "explanation": "Theo giáo trình: Hiệu ứng lề của việc thay đổi dữ liệu..."
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
      "answer": 0,
      "explanation": "Theo giáo trình: Hiệu ứng lề của việc thay đổi tài liệu..."
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
      "explanation": "Bảo trì phần mềm bao gồm sửa lỗi tồn đọng, nâng cấp các tính năng sử dụng và bảo đảm an toàn vận hành cho hệ thống.."
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
      "explanation": "Nếu chỉ có duy nhất mã nguồn mà không có tài liệu thiết kế/yêu cầu, việc hiểu hệ thống để bảo trì sẽ cực kỳ phức tạp.."
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
      "explanation": "Theo giáo trình: Nếu có một cấu hình phần mềm hoàn thiện, nhiệm vụ bảo trì bắt đầu bằng việc đánh giá các tài liệu thiết kế. Sau đó là xác định các đặc điểm thuộc cấu ..."
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
      "answer": 0,
      "explanation": "Theo giáo trình: Một chi phí khó xác định của việc bảo trì phần mềm là các cơ hội phát triển bị bỏ qua vì các tài nguyên có sẵn đều dành cho nhiệm vụ bảo trì...."
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
      "explanation": "Sự giảm sút năng suất lao động theo tỷ lệ 40:1 nghĩa là chi phí bảo trì mỗi dòng lệnh cao gấp 40 lần chi phí phát triển ban đầu.."
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
      "explanation": "Theo giáo trình: Số lượng các câu lệnh trong chương trình nguồn...."
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
      "answer": 0,
      "explanation": "Theo giáo trình: Danh sách các miền giá trị toàn vẹn: Các qui định về tính hợp lệ của các thông tin được lưu trữ. Có nhiều phương pháp, nhiều đề nghị khác nhau về việc..."
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
      "answer": 3,
      "explanation": "Theo giáo trình: Công nghệ phần mềm là ngành kỹ thuật liên quan đến tất cả các khía cạnh sản xuất phần mềm. Các hoạt động nền tảng của công nghệ phần mềm là đặc tả phầ..."
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
      "explanation": "Hoạt động bảo trì tập trung vào sửa lỗi, thích ứng môi trường và tối ưu, việc phân tích thêm chức năng lớn mới thuộc phát triển mới.."
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
      "explanation": "Yếu tố ít ảnh hưởng đến chi phí bảo trì nhất là mối quan hệ giữa các doanh nghiệp (yếu tố đối tác bên ngoài).."
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
      "explanation": "Quản lý thay đổi phần mềm giúp kiểm soát các yêu cầu phát sinh hợp lý, loại bỏ những thay đổi bất chợt vô căn cứ của người dùng.."
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
      "explanation": "Quản lý thay đổi (Change control) bắt đầu có hiệu lực ngay khi sản phẩm/tài liệu đầu tiên được nghiệm thu và đưa vào baseline.."
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
      "answer": 0,
      "explanation": "Theo giáo trình: Hiệu ứng lề của việc thay đổi tài liệu..."
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
      "answer": 0,
      "explanation": "Theo giáo trình: Hiệu ứng lề của việc thay đổi tài liệu..."
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
      "answer": 1,
      "explanation": "Theo giáo trình: Hiệu ứng lề của việc thay đổi mã nguồn..."
    }
  ]
};
