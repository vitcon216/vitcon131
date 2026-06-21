import json
import re

# Load parsed questions for Ch 2-6
with open('parsed_questions.json', 'r', encoding='utf-8') as f:
    parsed_data = json.load(f)

# Load Chapter 1 questions from ch1_questions.json
def extract_ch1():
    try:
        with open('ch1_questions.json', 'r', encoding='utf-8') as f:
            ch1_questions = json.load(f)
        print(f"Loaded {len(ch1_questions)} questions for Chapter 1 from ch1_questions.json")
        return ch1_questions
    except FileNotFoundError:
        print("Error: ch1_questions.json not found!")
        return []

ch1_questions = extract_ch1()

# Define the correct answer indices for Chapters 2-6
ch2_answers = {
    1: 0, 2: 3, 3: 0, 4: 1, 5: 1, 6: 3, 7: 0, 8: 3, 9: 3, 10: 3,
    11: 2, 12: 3, 13: 3, 14: 1, 15: 2, 16: 3, 17: 3, 18: 3, 19: 3, 20: 0,
    21: 0, 22: 2, 23: 3, 24: 3, 25: 3, 26: 2, 27: 3, 28: 3, 29: 3, 30: 0,
    31: 0, 32: 1, 33: 1, 34: 3, 35: 0, 36: 0, 37: 3, 38: 3, 39: 3, 40: 0,
    41: 3, 42: 3, 43: 1, 44: 1, 45: 3, 46: 3, 47: 3, 48: 2, 49: 0, 50: 0
}

ch3_answers = {
    354: 1, 355: 0, 356: 0, 357: 2, 358: 1, 359: 0, 360: 1, 361: 2, 362: 3, 363: 2,
    364: 2, 365: 1, 366: 3, 367: 2, 368: 2, 369: 3, 370: 0, 371: 2, 372: 3, 373: 1,
    374: 0, 377: 2, 378: 3, 379: 1, 380: 3, 381: 0, 382: 1, 383: 1, 384: 3, 385: 1,
    386: 0, 387: 2, 388: 3, 389: 1, 400: 3, 401: 0, 402: 1, 403: 3, 404: 2, 405: 3,
    406: 2, 407: 2, 408: 0, 409: 3, 410: 1, 411: 2, 412: 1, 413: 2, 414: 0, 415: 0,
    416: 0, 417: 0, 418: 3, 419: 1, 420: 0, 421: 2, 422: 1, 423: 2, 428: 3, 429: 3,
    430: 3, 431: 0, 432: 0, 433: 0, 434: 0
}

ch4_answers = {
    1: 0, 2: 0, 3: 2, 4: 0, 5: 0, 6: 3, 7: 3, 8: 0, 9: 0, 10: 0,
    11: 3, 12: 2, 13: 3, 14: 2, 15: 1, 16: 0, 17: 1, 18: 0, 19: 3, 20: 3,
    21: 0, 22: 3, 23: 2, 24: 0, 25: 3, 26: 2, 27: 2, 28: 2, 29: 2, 30: 0,
    31: 3, 32: 0, 33: 0, 34: 1, 35: 0, 36: 2, 37: 1, 38: 0, 39: 2, 62: 1,
    40: 0, 41: 3, 42: 0, 43: 1, 44: 3, 45: 1, 46: 2, 47: 1, 48: 2, 49: 2,
    50: 0, 51: 0, 52: 3, 53: 3, 54: 3, 55: 2, 56: 0, 57: 1, 58: 2, 59: 3,
    60: 3, 61: 1
}

ch5_answers = {
    1: 2, 2: 0, 3: 2, 4: 3, 5: 3, 6: 0, 7: 0, 8: 1, 9: 0, 10: 0,
    11: 0, 12: 1, 13: 0, 14: 2, 15: 0, 16: 2, 17: 0, 18: 3, 19: 0, 20: 1,
    21: 2, 22: 2, 23: 2, 24: 0, 25: 3, 26: 2, 27: 1, 28: 0, 29: 3, 30: 1,
    31: 2, 32: 3, 33: 1, 34: 1, 35: 2, 36: 0, 37: 0, 38: 3, 39: 0, 55: 0,
    40: 2, 41: 3, 42: 0, 43: 0, 44: 0, 45: 0, 46: 0, 47: 0, 48: 1, 49: 2,
    50: 2, 51: 3, 52: 3, 53: 1, 54: 1
}

ch6_answers = {
    1: 0, 2: 0, 3: 1, 4: 3, 5: 0, 6: 1, 7: 3, 8: 0, 9: 1, 10: 2,
    11: 3, 12: 2, 13: 1, 14: 3, 15: 0, 16: 2, 17: 2, 18: 0, 19: 1, 20: 2,
    21: 3, 22: 1, 23: 2, 24: 2, 25: 2
}

answer_maps = {
    'Chương 2_clean.txt': ch2_answers,
    'Chương 3_clean.txt': ch3_answers,
    'Chương 4_clean.txt': ch4_answers,
    'Chương 5_clean.txt': ch5_answers,
    'Chương 6_clean.txt': ch6_answers
}

# Pre-defined professional Vietnamese explanations for questions
explanations = {
    'Chương 2_clean.txt': {
        1: "Quá trình xác định yêu cầu tập trung trả lời câu hỏi 'cái gì' (What) hệ thống phải thực hiện, thay vì 'như thế nào' (How).",
        2: "Định ra yêu cầu (User Requirements) là những phát biểu bằng ngôn ngữ tự nhiên mô tả các dịch vụ mà hệ thống cung cấp.",
        3: "Tài liệu xác định yêu cầu (Requirements Definition) là khẳng định bằng ngôn ngữ tự nhiên về dịch vụ và ràng buộc hệ thống.",
        4: "Tài liệu đặc tả yêu cầu (Requirements Specification) mô tả chi tiết, có cấu trúc các chức năng và đóng vai trò như hợp đồng.",
        5: "Chất lượng thiết kế kiến trúc phần mềm phải dựa vào việc tổ chức dữ liệu và cấu trúc điều khiển của hệ thống.",
        6: "Trong phân tích kiến trúc, các khung nhìn chính bao gồm Dòng dữ liệu, Module, Tiến trình. Đặc tính không phải khung nhìn mô tả mẫu.",
        7: "Biểu đồ quan hệ thực thể (ERD) thể hiện cấu trúc và mối quan hệ giữa các đối tượng dữ liệu trong hệ thống.",
        8: "Khả năng chấp nhận được của phần mềm thể hiện ở sự phù hợp tối đa với các yêu cầu thực tế của người sử dụng.",
        9: "Khi đấu thầu hoặc ký hợp đồng sơ bộ, yêu cầu được phát biểu ở mức trừu tượng để không áp đặt trước giải pháp kỹ thuật.",
        10: "Các khía cạnh cần thẩm định yêu cầu gồm: Giá trị (Value), Chắc chắn (Unambiguous), Hoàn chỉnh (Complete), Hiện thực (Realizable), Mẫu (Prototypable).",
        11: "Trong thiết kế kiến trúc, mô tả chi tiết xử lý cho mỗi module là bổ sung cần thiết khi thực hiện ánh xạ giao dịch.",
        12: "Thiết kế giao diện tốt phải để người dùng kiểm soát. Bắt buộc một cách thức cứng nhắc sẽ vi phạm nguyên lý này.",
        13: "Tính nhất quán ngầm định yêu cầu kỹ thuật nhập tương tự và mỗi ứng dụng phải có diện mạo (look and feel) riêng biệt nhất quán.",
        14: "Mô hình người dùng (User Model) thể hiện bức tranh hệ thống trong tâm trí của người dùng cuối.",
        15: "Giai đoạn xác định yêu cầu kết thúc bằng danh sách yêu cầu chi tiết kèm theo các sơ đồ luồng dữ liệu (DFD) tương ứng.",
        16: "Đặc tả yêu cầu phần mềm là căn cứ pháp lý để nghiệm thu, đánh giá xem sản phẩm có hoàn thành đúng cam kết khi chuyển giao hay không.",
        17: "Cho phép người dùng 'undo' (hủy bước sai) thuộc nguyên tắc 'Cho phép người dùng kiểm soát', không phải 'Giảm thiểu ghi nhớ'.",
        18: "Phân tích yêu cầu phần mềm cần xét tính khả thi về kinh tế, kỹ thuật, pháp lý. Khả thi về nghệ thuật không phải yếu tố kỹ nghệ.",
        19: "Ngôn ngữ tự nhiên địa phương không được sử dụng để đặc tả yêu cầu vì thiếu tính chuẩn hóa và dễ gây hiểu nhầm.",
        20: "Đặc tả hình thức (Formal specification) là phương pháp đặc tả sử dụng ngôn ngữ toán học chặt chẽ để định nghĩa cú pháp và ngữ nghĩa.",
        21: "Đặc tả hình thức sử dụng toán học nên rất kén người đọc và khó hiểu, nên 'Nhiều người biết và dễ diễn đạt' là sai (thực tế là nhược điểm).",
        22: "Hai hướng tiếp cận chính của đặc tả hình thức là: tiếp cận đại số (algebraic) và tiếp cận mô hình (model-based).",
        23: "Đặc tả hệ thống phải là một mô hình nhận thức (cognitive model) phản ánh cách người dùng và nhà phân tích hiểu về hệ thống.",
        24: "Nguyên lý đặc tả yêu cầu yêu cầu phân tách chức năng với cài đặt, mô tả cả môi trường vận hành. Kết nối thiết bị là chi tiết cài đặt.",
        25: "Đặc tả yêu cầu mô tả hành vi nhìn thấy bên ngoài (mô hình nhận thức) và môi trường hoạt động, không phải là mô hình cài đặt cụ thể.",
        26: "Ngôn ngữ tự nhiên có tính đa nghĩa, do đó nhược điểm lớn nhất là dễ gây hiểu nhầm hoặc nhập nhằng giữa các bên.",
        27: "Với dự án lớn, ngôn ngữ tự nhiên không cấu trúc bị hạn chế vì dễ gây nhập nhằng, thiếu nhất quán và khó quản lý.",
        28: "Đặc tả bắt buộc phải mô tả cả môi trường mà hệ thống vận hành. Do đó phát biểu 'Đặc tả không quan trọng môi trường' là sai.",
        29: "Tiến triển thực hiện từng giai đoạn (Project progress) thuộc kế hoạch dự án, không phải thành phần của tài liệu đặc tả yêu cầu SRS.",
        30: "Đặc tả hình thức dựa trên toán học nên rất chặt chẽ, không có chuyện 'Linh hoạt, mềm dẻo dẫn đến hiểu nhầm' (đây là nhược điểm của ngôn ngữ tự nhiên).",
        31: "Câu hỏi mở (Open-ended questions) cho phép người được phỏng vấn tự do trả lời theo quan điểm của họ mà không bị giới hạn.",
        32: "Họp nhóm (Group meetings/Joint Application Design) là kỹ thuật tập hợp từ 3 người trở lên để cùng thảo luận về một chủ đề cụ thể.",
        33: "Đóng vai người sử dụng để thực hiện nghiệp vụ thực tế trong một thời gian ngắn là kỹ thuật 'Ấn định công việc tạm thời' (Temporary assignment).",
        34: "Các kỹ thuật thu thập dữ liệu tiêu chuẩn gồm Phỏng vấn, Họp nhóm, Quan sát, Xem tài liệu. 'Tiếp xúc' không phải thuật ngữ chuẩn.",
        35: "Câu hỏi đóng (Closed questions) yêu cầu câu trả lời giới hạn như Có/Không hoặc chọn trong các phương án định sẵn.",
        36: "Câu hỏi như 'Bạn có dùng báo cáo hàng tháng không?' yêu cầu trả lời Có/Không, đây là dạng câu hỏi đóng điển hình.",
        37: "Phỏng vấn có cấu trúc đi theo form định sẵn nên dễ quản lý, ít tốn thời gian phân tích, nhưng nhược điểm là thiếu tính mềm dẻo nhất.",
        38: "Trong họp nhóm, ý kiến cá nhân dễ bị ảnh hưởng bởi những người khác hoặc người dẫn dắt (hiệu ứng đám đông), nên D không phải ưu điểm.",
        39: "Quan sát trực tiếp tốn thời gian và có thể làm người bị quan sát đổi thói quen, nhưng không dễ bị chuyển hướng sang chính trị/thể thao như họp nhóm.",
        40: "Quan sát trực tiếp giúp BA hiểu rõ môi trường thực tế và vượt qua khoảng cách giao tiếp, nhưng không dùng để tập hợp nhiều người dùng.",
        41: "Phỏng vấn có cấu trúc có câu hỏi soạn sẵn nên chi phí chuẩn bị lớn và giảm tính chủ động, còn tốn thời gian phân tích là của phỏng vấn không cấu trúc.",
        42: "Phỏng vấn không cấu trúc tốn nhiều thời gian phân tích dữ liệu và lãng phí thời gian nếu lạc đề, còn giảm tính chủ động là nhược điểm của phỏng vấn có cấu trúc.",
        43: "Đặc tính dữ liệu phải có cấu trúc rõ ràng. Thiếu cấu trúc dữ liệu chính xác sẽ dẫn đến xác định sai yêu cầu thông tin.",
        44: "Để hiểu các vấn đề nghiệp vụ thực tế của bác sĩ, phỏng vấn trực tiếp (phỏng vấn bác sĩ) là phương pháp trực quan và phù hợp nhất.",
        45: "Để thu thập yêu cầu chi tiết về kê đơn, cần kết hợp phỏng vấn (hỏi loại thuốc), quan sát thực tế và phân tích các đơn thuốc mẫu trước đó.",
        46: "Để hiểu sâu hành vi và mong muốn của khách hàng đặt phòng, thảo luận nhóm (Focus Group) với các khách du lịch thường xuyên là tối ưu.",
        47: "Thu thập ý kiến người dùng về giao diện có thể sử dụng khảo sát trực tuyến, phỏng vấn trực tiếp hoặc họp nhóm tập trung tùy quy mô.",
        48: "Sau câu hỏi đóng để lấy thông tin nền tảng, cần đặt các câu hỏi mở để khai thác sâu hơn lý do, nghiệp vụ và tâm tư của người dùng.",
        49: "Câu hỏi 'Bạn đã từng sử dụng chưa?' chỉ có thể trả lời Có hoặc Chưa, đây là câu hỏi đóng.",
        50: "Câu hỏi hỏi mức độ đồng ý về giao diện dễ dùng hay không là câu hỏi đóng (trả lời Có/Không hoặc theo thang đo định sẵn)."
    },
    'Chương 3_clean.txt': {
        354: "Phân tích yêu cầu trả lời câu hỏi 'Cái gì' (What), còn Thiết kế phần mềm trả lời câu hỏi 'Như thế nào' (How) hệ thống được xây dựng.",
        355: "Giai đoạn thiết kế đóng vai trò quyết định, chịu trách nhiệm tới 80% đối với sự thành công và chất lượng lâu dài của sản phẩm.",
        356: "Giai đoạn thiết kế nhận đầu vào là tài liệu yêu cầu (kết quả phân tích) và chuyển đổi chúng thành dạng biểu diễn hệ thống phần mềm.",
        357: "Dưới góc nhìn quản lý, tiến trình thiết kế gồm hai bước chính: Thiết kế sơ bộ (Architectural design) và Thiết kế chi tiết (Detailed design).",
        358: "Về kỹ thuật, thiết kế gồm: Thiết kế dữ liệu, Thiết kế kiến trúc, Thiết kế thủ tục, Thiết kế đối tượng, và Thiết kế giao diện.",
        359: "Tiến trình thiết kế đi từ mức trừu tượng cao đến chi tiết: Phác thảo phi hình thức, Thiết kế phi hình thức, Thiết kế hình thức, Thiết kế hoàn chỉnh.",
        360: "Đặc tả trừu tượng là việc định nghĩa các dịch vụ mà mỗi hệ thống con phải cung cấp cùng các ràng buộc hoạt động của chúng.",
        361: "Thiết kế cấu trúc dữ liệu là việc chi tiết hóa và đặc tả các cấu trúc lưu trữ và tổ chức dữ liệu sẽ sử dụng trong chương trình.",
        362: "Thiết kế giao diện xác định và ghi chép tài liệu về cách thức các hệ thống con giao tiếp và trao đổi dữ liệu với nhau.",
        363: "Thiết kế thành phần (component design) phân chia các dịch vụ của hệ thống con thành các thành phần nhỏ hơn, độc lập.",
        364: "Thiết kế phần mềm gồm hai nhiệm vụ: Xác định kiến trúc tổng thể và chọn lựa cách thức thực hiện (thuật toán, cấu trúc) cho từng thành phần.",
        365: "Thiết kế là quá trình đưa ra quyết định chọn lựa. Với mỗi cách chọn lựa cấu trúc/thuật toán khác nhau sẽ cho ra các bản thiết kế khác nhau.",
        366: "Kết quả thiết kế gồm thiết kế giao diện, dữ liệu, xử lý (thuật toán). Thành phần chức năng là thực thể logic động, không có bản thiết kế riêng biệt.",
        367: "Bản thiết kế giao diện mô tả cả nội dung, hình thức hiển thị (màn hình) lẫn các giao tác (luồng đi) và xử lý tương ứng khi người dùng tương tác.",
        368: "Thiết kế thành phần xử lý bao gồm việc định nghĩa hệ thống các kiểu dữ liệu và hệ thống các hàm/thủ tục thực hiện xử lý.",
        369: "Thiết kế dữ liệu xác định dạng lưu trữ (file, database) và quan hệ các bảng. Hệ thống các kết quả đầu ra của chương trình thuộc về yêu cầu chức năng.",
        370: "Bản thiết kế dùng làm cơ sở thực hiện chi tiết, liên lạc giữa các nhóm và bảo trì. SRS mới là cơ sở hợp đồng pháp lý giữa hai bên.",
        371: "Thiết kế hướng đối tượng (OOD) là phương pháp thiết kế hệ thống dựa trên các đối tượng. Nó có thể áp dụng cho cả ngôn ngữ hướng đối tượng lẫn hướng thủ tục.",
        372: "Chất lượng thiết kế được đánh giá qua: Sự kết dính (Cohesion), Sự ghép nối (Coupling), Sự hiểu được (Understandability), Tính thích nghi (Adaptability).",
        373: "Trong OOD, các đối tượng hoạt động độc lập và chỉ tương tiếp/giao tiếp với nhau thông qua việc gửi và nhận các thông điệp (messages).",
        374: "Thiết kế hướng đối tượng đòi hỏi tư duy trừu tượng cao và khó học hơn so với thiết kế hướng chức năng truyền thống.",
        377: "Thiết kế hướng chức năng (cấu trúc) và thiết kế hướng đối tượng bổ sung và hỗ trợ lẫn nhau trong các giai đoạn phát triển.",
        378: "Nguyên tắc mô-đun hóa yêu cầu kích thước mỗi mô-đun phải vừa phải, gắn kết tốt. Kích thước mô-đun 'đủ lớn' không phải là yêu cầu thiết kế tốt.",
        379: "Sự ghép nối (Coupling) đo lường mức độ liên kết, khớp nối chặt chẽ hay lỏng lẻo giữa các thành phần trong hệ thống.",
        380: "Các loại trừu tượng trong thiết kế gồm: trừu tượng điều khiển, dữ liệu, thủ tục. Không có khái niệm trừu tượng chương trình.",
        381: "Kiến trúc phần mềm thể hiện qua các mô hình cấu trúc, xử lý, động. Mô hình dữ liệu thuộc về thiết kế dữ liệu chi tiết.",
        382: "Cấp bậc điều khiển (Control hierarchy/Program structure) thể hiện sự tổ chức và phân cấp quản lý giữa các mô-đun trong chương trình.",
        383: "Thủ tục phần mềm tập trung vào việc mô tả luồng xử lý chi tiết bên trong của từng mô-đun riêng biệt.",
        384: "Thiết kế dữ liệu phải đi trước vì cấu trúc dữ liệu ảnh hưởng sâu sắc đến cách thiết kế các thuật toán và thành phần xử lý.",
        385: "Ma trận truy vết yêu cầu (Requirement traceability matrix) dùng để đối chiếu đảm bảo mọi yêu cầu trong SRS đều được thiết kế.",
        386: "Kiến trúc phần mềm mô tả cấu trúc chương trình, cơ sở dữ liệu, thiết kế dữ liệu tổng thể. Chi tiết giải thuật thuộc về thiết kế thành phần.",
        387: "Kho dữ liệu (Data Warehouse) có đặc trưng là tích hợp thông tin từ nhiều nguồn và dữ liệu có tính lịch sử, không thường xuyên thay đổi.",
        388: "Mẫu kiến trúc (Architectural pattern) gồm các thành phần, ràng buộc và mô hình ngữ nghĩa. Mô hình mô phỏng không thuộc mẫu kiến trúc.",
        389: "Để chọn mẫu kiến trúc phù hợp, kỹ sư phải khám phá các đặc trưng hoạt động và các ràng buộc phi chức năng của hệ thống.",
        400: "Các phương pháp thiết kế phần mềm gồm thiết kế tổng quát và thiết kế chi tiết. Thiết kế trực tiếp/gián tiếp không phải là hai phương pháp độc lập.",
        401: "Phương pháp thiết kế trực tiếp nhận đầu vào trực tiếp từ kết quả đặc tả yêu cầu để chuyển đổi thành cấu trúc chương trình.",
        402: "Thiết kế trực tiếp đơn giản, chuyển trực tiếp yêu cầu thành thiết kế nên chỉ phù hợp với các ứng dụng có quy mô nhỏ.",
        403: "Trong thiết kế gián tiếp, giai đoạn thiết kế nhận một phần kết quả từ xác định yêu cầu, phần chính yếu phải qua phân tích hệ thống chi tiết.",
        404: "Thiết kế gián tiếp có quy trình phân tích trung gian chặt chẽ nên phù hợp và cần thiết cho các dự án phần mềm quy mô lớn.",
        405: "Đầu ra thiết kế xử lý gồm danh sách các hàm, kiểu dữ liệu và mô tả chi tiết của chúng. Danh sách ràng buộc thuộc về yêu cầu hệ thống.",
        406: "Thiết kế xử lý (processing design) xác định hệ thống các hàm, thủ tục cùng các cấu trúc dữ liệu cục bộ phục vụ tính toán.",
        407: "Mô tả màn hình giao diện cần đầy đủ: Tên màn hình, nội dung thông tin, hình thức trình bày và các thao tác người dùng có thể thực hiện.",
        408: "Tính nhất quán giao diện yêu cầu các nút/thành phần giống nhau phải đồng bộ về vị trí, ngôn ngữ hiển thị, hình dáng, màu sắc và cách kích hoạt.",
        409: "Điều quan trọng nhất trong thiết kế phần mềm là Chất lượng (Quality) tổng thể của bản thiết kế, quyết định sự thành bại của dự án.",
        410: "Thiết kế giao diện chịu ảnh hưởng bởi thời gian đáp ứng và quản lý lỗi. Năng khiếu nghệ thuật của cá nhân thiết kế ít ảnh hưởng nếu tuân thủ quy chuẩn.",
        411: "Thông báo lỗi tốt nên đi kèm với các dấu hiệu trực quan (màu đỏ, nhấp nháy) hoặc âm thanh để người dùng dễ dàng nhận biết.",
        412: "Thiết kế giao diện giống như bản vẽ bố trí nội thất/cửa, giúp người dùng hình dung cách tương tác trực tiếp với ngôi nhà.",
        413: "Về mặt kỹ thuật, các bước thiết kế gồm thiết kế dữ liệu, thiết kế kiến trúc, thiết kế giao diện và thiết kế thành phần.",
        414: "Chiến lược thiết kế hướng chức năng (cấu trúc) sử dụng các vùng dữ liệu dùng chung (global data) cho các mô-đun cùng truy cập.",
        415: "Mô hình kho dữ liệu (Repository model) sử dụng một cơ sở dữ liệu trung tâm cho phép tất cả các phân hệ truy cập và trao đổi thông tin.",
        416: "Thiết kế dữ liệu ở mức thành phần tập trung vào cấu trúc dữ liệu nội bộ và thuộc tính, việc thiết kế CSDL tổng thể thuộc mức kiến trúc.",
        417: "Bản thiết kế tốt phải bao phủ toàn bộ yêu cầu trong SRS và cung cấp mô tả chi tiết, rõ ràng để lập trình viên cài đặt.",
        418: "Để phân tích tác vụ người dùng khi thiết kế UI, việc quan sát trực tiếp thao tác thực tế của họ là hướng tiếp cận hiệu quả nhất.",
        419: "Đặc trưng của thiết kế tốt là thực hiện đầy đủ các yêu cầu chức năng và phi chức năng đã được chỉ ra trong pha phân tích.",
        420: "Phương pháp thiết kế cung cấp ký hiệu, nguyên tắc đánh giá và heuristic tinh chế. Quản lý cấu hình là hoạt động quản lý dự án.",
        421: "Người dùng sản phẩm (end-users) là người trực tiếp sử dụng giao diện hàng ngày nên ý kiến của họ là quan trọng nhất đối với thiết kế UI.",
        422: "Biểu đồ luồng dữ liệu (DFD) biểu diễn các chức năng (tiến trình) biến đổi và luân chuyển các dòng dữ liệu trong hệ thống.",
        423: "Tài liệu thiết kế chi tiết (Detailed Design Document) là kết quả được tạo ra trong pha thiết kế hệ thống làm cơ sở trực tiếp cho cài đặt.",
        428: "Các quan hệ chuẩn trong thiết kế CSDL quan hệ gồm: 1-1, 1-n, n-n. Quan hệ 0-1 không phải quan hệ thực thể chuẩn.",
        429: "Các quan hệ chuẩn trong thiết kế CSDL quan hệ gồm: 1-1, 1-n, n-n. Quan hệ 1-0 không phải quan hệ thực thể chuẩn.",
        430: "Các quan hệ chuẩn trong thiết kế CSDL quan hệ gồm: 1-1, 1-n, n-n. Quan hệ 0-0 không phải quan hệ thực thể chuẩn.",
        431: "Tạo liên kết giữa các bảng (khóa ngoại) nhằm đảm bảo tính ràng buộc toàn vẹn dữ liệu trong cơ sở dữ liệu.",
        432: "Khóa chính (Primary Key) của mỗi bảng được thiết lập để định danh duy nhất và phân biệt giữa các bản ghi (dòng dữ liệu) với nhau.",
        433: "Khóa ngoại (Foreign Key) đóng vai trò như một con trỏ trỏ tới khóa chính của bảng khác để thiết lập mối quan hệ giữa hai bảng.",
        434: "Thống kê cho thấy phần lớn các dự án phần mềm thất bại ở khâu Thiết kế và Xác định yêu cầu (do sai kiến trúc hoặc sai yêu cầu người dùng)."
    },
    'Chương 4_clean.txt': {
        1: "Một chương trình được cài đặt tốt sẽ đem lại cho ta nhiều thuận lợi trong công việc bảo trì (sửa lỗi, nâng cấp) sau này.",
        2: "Phong cách lập trình (formatting, naming) và đặc trưng của ngôn ngữ lập trình ảnh hưởng rất lớn đến độ tin cậy, hiệu năng và chất lượng phần mềm.",
        3: "Phong cách lập trình tốt là sử dụng các câu lệnh đơn giản, ngắn gọn, dễ đọc, dễ hiểu và hiệu quả.",
        4: "Chuẩn hóa thứ tự khai báo dữ liệu giúp lập trình viên dễ theo dõi, thuận lợi cho việc kiểm thử, gỡ rối và bảo trì.",
        5: "Việc xây dựng các câu lệnh nên tuân theo phong cách lập trình cấu trúc (mỗi khối có 1 lối vào, 1 lối ra duy nhất) để dễ kiểm soát logic.",
        6: "Các quy tắc cho câu lệnh đơn gồm: tránh điều kiện phức tạp, khử phủ định, tránh lồng nhau. Việc tránh trùng lặp mã nguồn (sử dụng lại đoạn chương trình giống nhau) không phải là chỉ dẫn dành riêng cho câu lệnh đơn.",
        7: "Ngôn ngữ thế hệ thứ nhất (mã máy/hợp ngữ) giao tiếp trực tiếp với phần cứng nên tốc độ xử lý nhanh và không yêu cầu cấu hình phần cứng mạnh.",
        8: "Theo giáo trình trang 80, các ngôn ngữ thế hệ thứ hai được đặc trưng bởi việc sử dụng rộng rãi thư viện phần mềm khổng lồ và nó cũng đã được chấp nhận rộng rãi.",
        9: "Trọng tâm của ngôn ngữ thế hệ thứ tư (4GL) là nâng mức độ trừu tượng, biểu thị các cấu trúc dữ liệu ở mức độ trừu tượng cao hơn bằng cách xóa bỏ yêu cầu xác định chi tiết giải thuật.",
        10: "SQL (Structured Query Language) là ngôn ngữ hỏi đáp khai báo chuyên biệt dùng để truy vấn dữ liệu trong các hệ quản trị cơ sở dữ liệu.",
        11: "C++ là ngôn ngữ lập trình lai (hybrid), hỗ trợ cả phong cách cấu trúc lẫn hướng đối tượng.",
        12: "Prolog là ngôn ngữ lập trình khai báo tiêu biểu theo phong cách logic (Logic programming), giải quyết bài toán bằng luật và sự kiện.",
        13: "Ngôn ngữ lập trình hướng đối tượng (ở đây nói về C++) có phần mở rộng tệp mã nguồn là *.cpp.",
        14: "Tệp tin mở rộng *.cpp là viết tắt của C Plus Plus, dùng cho ngôn ngữ lập trình hướng đối tượng C++.",
        15: "Prolog (Programming Logic) là ngôn ngữ lập trình logic chuyên biệt cho các bài toán trí tuệ nhân tạo và hệ chuyên gia.",
        16: "Lập trình cấu trúc có 3 đặc trưng cơ bản: Tính đơn thể (modules), Cấu trúc điều khiển chuẩn (tuần tự, rẽ nhánh, lặp) và Lối vào/ra đơn.",
        17: "Lập trình hướng đối tượng (OOP) cho phép kết hợp cả dữ liệu (thuộc tính) và hành vi (phương thức) vào trong thực thể đối tượng.",
        18: "PHP là ngôn ngữ kịch bản cực kỳ phổ biến chuyên biệt cho việc phát triển các ứng dụng web động.",
        19: "SQL (Structured Query Language) là ngôn ngữ truy vấn cơ sở dữ liệu quan hệ tiêu chuẩn.",
        20: "Dựa vào bảng lựa chọn ngôn ngữ cài đặt trong giáo trình, SQL là ngôn ngữ phù hợp với kiểu ứng dụng theo Lô (Batch).",
        21: "Hạn chế của ngôn ngữ tự nhiên khi biểu diễn thuật toán là tính rườm rà, thiếu chính xác và dễ gây hiểu nhầm ý nhau.",
        22: "Điểm trung bình (GPA) có các giá trị lẻ như 7.5, 8.2 nên cần được khai báo bằng kiểu số thực (Float/Double).",
        23: "Tuổi thọ của con người luôn là một giá trị nguyên (ví dụ 25 tuổi, 80 tuổi), vì vậy cần khai báo kiểu số nguyên (Integer).",
        24: "Trong kỹ nghệ lập trình, tối ưu về không gian (space optimization) nghĩa là tiết kiệm dung lượng bộ nhớ sử dụng khi chạy.",
        25: "Theo bảng thống kê trang 84, ngôn ngữ C không phù hợp với kiểu ứng dụng theo Lô (Batch) vì không được đánh dấu X.",
        26: "Theo bảng thống kê trang 84, Prolog không phù hợp cho các ứng dụng chạy trực tuyến (Online) vì không có đánh dấu X.",
        27: "Theo bảng thống kê trang 84, Prolog không phù hợp cho kiểu ứng dụng hỏi đáp Cơ sở dữ liệu vì không có đánh dấu X.",
        28: "Theo bảng thống kê trang 84, COBOL không phù hợp cho kiểu ứng dụng hỗ trợ quyết định (DSS) vì không có đánh dấu X.",
        29: "Theo bảng thống kê trang 84, ngôn ngữ C phù hợp cho các ứng dụng EIS (Executive Information System) vì được đánh dấu X.",
        30: "Biến (Variable) là một đại lượng được đặt tên và có giá trị có thể thay đổi trong quá trình thực thi chương trình.",
        31: "Ngôn ngữ hướng đối tượng có tính kế thừa, đa hình, đóng gói. Tính logic là đặc trưng của ngôn ngữ logic (như Prolog).",
        32: "JSP (Java Server Pages) là công nghệ và phần mở rộng tệp tin dùng để xây dựng các trang web động sử dụng ngôn ngữ Java.",
        33: "Một lớp (class) trong OOP là khuôn mẫu gồm hai thành phần cơ bản: thuộc tính (data) và phương thức (behavior/methods).",
        34: "Thuộc tính (attributes/properties) của đối tượng được biểu diễn bằng các biến và hằng số lưu trữ trạng thái của đối tượng đó.",
        35: "Dòng chú thích (comment) dùng để giải thích mã nguồn giúp con người dễ đọc hiểu, chương trình biên dịch sẽ bỏ qua chúng khi chạy.",
        36: "Quản lý sách liên quan chặt chẽ đến lưu trữ dữ liệu, vì vậy cần định hướng dùng ngôn ngữ lập trình hướng cơ sở dữ liệu.",
        37: "Theo giáo trình trang 77, độ phức tạp và việc tổ chức cấu trúc dữ liệu được xác định trong bước Thiết kế phần mềm.",
        38: "Theo giáo trình trang 77, phong cách khai báo dữ liệu được thiết lập khi chương trình được sinh ra (bước cài đặt/lập trình).",
        39: "Trong ngôn ngữ lập trình, dữ liệu được phân chia theo phạm vi truy cập thành dữ liệu toàn cục (global) và dữ liệu cục bộ (local).",
        62: "Cấp phát bộ nhớ động (dynamic memory allocation) cho phép hệ thống chỉ cấp phát bộ nhớ khi chương trình chạy và thực sự có nhu cầu.",
        40: "Cách thức cài đặt vào/ra (I/O) tác động trực tiếp đến giao tiếp của người dùng, nên có ảnh hưởng lớn nhất đến người sử dụng hệ thống.",
        41: "Kiểu dữ liệu tự định nghĩa do lập trình viên thiết lập và có phạm vi sử dụng trong một chương trình hoặc một ứng dụng nhất định.",
        42: "Đoạn mã có một vòng lặp chạy từ 1 đến n với các phép toán bên trong tốn thời gian hằng số O(1), do đó độ phức tạp là O(n).",
        43: "Đoạn mã chỉ chứa một biểu thức gán công thức toán học thực hiện trong thời gian hằng số, do đó độ phức tạp là O(1).",
        44: "Đoạn mã chứa hai vòng lặp lồng nhau chạy lần lượt n và m lần, do đó độ phức tạp thuật toán là O(n*m).",
        45: "Đoạn mã chỉ là biểu thức tính toán số học hằng số, chạy trong thời gian hằng số, do đó độ phức tạp là O(1).",
        46: "Đoạn mã chứa ba vòng lặp lồng nhau đều chạy tối đa n lần, do đó độ phức tạp thuật toán là O(n^3).",
        47: "Đoạn mã chỉ chứa một vòng lặp chạy n lần từ 0 đến n-1, do đó độ phức tạp thuật toán là O(n).",
        48: "Đoạn mã chứa hai vòng lặp lồng nhau đều chạy n lần từ 0 đến n-1, do đó độ phức tạp thuật toán là O(n^2).",
        49: "Đoạn mã chứa hai vòng lặp lồng nhau chạy n lần từ 1 đến n, do đó độ phức tạp thuật toán là O(n^2).",
        50: "Đoạn mã chỉ chứa câu lệnh gán phép tính số học chạy trong thời gian hằng số, do đó độ phức tạp thuật toán là O(1).",
        51: "Đoạn mã chỉ chứa phép chia lấy dư mod số học chạy trong thời gian hằng số, do đó độ phức tạp thuật toán là O(1).",
        52: "Đoạn mã chứa ba vòng lặp lồng nhau chạy n lần, do đó độ phức tạp thuật toán là O(n^3).",
        53: "Đoạn mã chứa ba vòng lặp lồng nhau chạy n lần, do đó độ phức tạp thuật toán là O(n^3).",
        54: "Đoạn mã chứa hai vòng lặp lồng nhau chạy n và m lần, do đó độ phức tạp thuật toán là O(n*m).",
        55: "Đoạn mã chứa hai vòng lặp lồng nhau chạy n và m lần, do đó độ phức tạp thuật toán là O(n*m).",
        56: "Định nghĩa chương trình tuần tự là bộ biến đổi tuần tự P để chuyển dữ liệu vào x thành ra y trong đó x và y hoàn toàn được xác định trước.",
        57: "Tiên đề gán định nghĩa luật biến đổi trạng thái và điều kiện sau khi thực hiện lệnh gán giá trị của biểu thức cho một biến.",
        58: "Tiên đề rẽ nhánh định nghĩa luật đúng đắn cho cấu trúc điều kiện dạng đủ (if-then-else) dựa trên cả hai nhánh đúng và sai.",
        59: "Tiên đề lặp (loop axiom) sử dụng khái niệm bất biến vòng lặp (loop invariant) để chứng minh tính đúng đắn của vòng lặp while.",
        60: "Tiên đề về tính bất biến của chương trình chứng minh rằng một đoạn chương trình P không làm thay đổi trạng thái của tính chất {A}.",
        61: "QA (Quality Assurance - Đảm bảo chất lượng) là hệ thống các hoạt động lên kế hoạch, giám sát quy trình để đảm bảo chất lượng sản phẩm."
    },
    'Chương 5_clean.txt': {
        1: "Nhà quản lý thường e ngại kiểm thử vì nó tốn kém tài nguyên và kéo dài thời gian bàn giao dự án mà không tạo ra tính năng mới.",
        2: "Lỗi chiến lược (strategic error) là lỗi nghiêm trọng xuất phát từ việc hiểu sai yêu cầu hoặc ý đồ thiết kế hệ thống bị sai ngay từ đầu.",
        3: "Lỗi cú pháp (syntax error) là lỗi vi phạm quy tắc ngữ pháp của ngôn ngữ lập trình và bị phát hiện ngay khi biên dịch.",
        4: "Hiệu ứng phụ (side effect) xảy ra khi một hàm/chương trình con thay đổi giá trị của một biến ngoài ý muốn của lập trình viên.",
        5: "Mục đích của kiểm thử là tìm lỗi để cải thiện chất lượng, không phải là công cụ để đổ lỗi hoặc tìm cá nhân chịu trách nhiệm.",
        6: "Thử nghiệm tĩnh (reliability testing) nhằm mục tiêu đánh giá và xác định độ tin cậy tổng thể của phần mềm.",
        7: "Quá trình đánh giá độ tin cậy diễn ra tuần tự: Xác định độ đo -> Sinh dữ liệu thử -> Chạy thử ghi nhận thất bại -> Tính toán độ tin cậy.",
        8: "Phần mềm an toàn sinh mệnh thứ cấp (secondary safety-critical) là phần mềm gián tiếp gây ra tai nạn (ví dụ: lỗi CSDL y tế).",
        9: "Lập trình phòng thủ (defensive programming) giả định mã nguồn luôn có thể chứa lỗi và chủ động viết mã kiểm tra để tránh sụp đổ hệ thống.",
        10: "Hoạt động xác minh (Verification) và thẩm định (Validation) - V&V - là một quá trình liên tục diễn ra suốt toàn bộ vòng đời phần mềm.",
        11: "Thẩm định (Validation - Are we building the right product?) kiểm tra xem sản phẩm có đáp ứng mong đợi thực tế của người dùng hay không.",
        12: "Xác minh (Verification - Are we building the product right?) kiểm tra xem sản phẩm có tuân thủ đúng các tài liệu đặc tả yêu cầu hay không.",
        13: "Quy trình đặc tả độ tin cậy: Phân tích hệ quả thất bại -> Phân nhóm thất bại -> Thiết lập yêu cầu độ tin cậy bằng độ đo tương ứng.",
        14: "Độ tin cậy là đặc trưng động, được tính toán dựa trên tần suất xuất hiện các thất bại (failures) của phần mềm khi chạy.",
        15: "Ước lượng thời gian hoàn thành sai là lỗi quản trị dự án, không phải lỗi kỹ thuật (software defect) nằm trong mã nguồn phần mềm.",
        16: "Kiểm thử phần mềm hướng tới hai mục tiêu: phát hiện việc phần mềm không làm đúng yêu cầu, hoặc làm những việc không được yêu cầu.",
        17: "Một ca kiểm thử thành công là ca kiểm thử phát hiện ra được những lỗi mới chưa từng được biết đến trước đó.",
        18: "Kiểm tra phát triển do đội dự án thực hiện gồm: kiểm tra đơn vị, kiểm tra tích hợp, kiểm tra hệ thống. Code test không phải thuật ngữ chuẩn.",
        19: "Kiểm tra độc lập do bên thứ ba hoặc khách hàng thực hiện gồm hoạt động Đảm bảo chất lượng (QA) và Kiểm thử chấp nhận (Acceptance test).",
        20: "Kiểm thử hộp trắng (White-box testing) tập trung vào cấu trúc logic, đường chạy và giải thuật bên trong mã nguồn.",
        21: "Kiểm thử từ trên xuống (Top-down integration) bắt đầu từ module điều khiển chính và sử dụng các module giả lập (stubs) để thay thế.",
        22: "Đoán lỗi (error guessing) là kỹ thuật kiểm thử hộp đen dựa trên kinh nghiệm. White-box gồm chứng minh toán học, cleanroom, logic test.",
        23: "Kiểm thử tích hợp từ trên xuống (Top-down) giúp tích hợp giao diện người dùng sớm, thuận lợi cho việc kiểm tra màn hình và demo khách hàng.",
        24: "Kiểm thử phần mềm là tiến trình thực thi chương trình với mục đích đánh giá xem hệ thống có thỏa mãn các yêu cầu đã đặt ra hay không.",
        25: "Với hệ thống lớn, kiểm thử được chia làm 5 bước: Thử đơn vị, Thử module, Thử hệ con, Thử hệ thống, và Thử nghiệm thu.",
        26: "Bộ kiểm toán mã (Code auditor) là công cụ tự động phân tích mã nguồn để kiểm tra xem nó có tuân thủ các quy chuẩn lập trình tối thiểu hay không.",
        27: "Đội kiểm thử độc lập (IV&V) không bị ảnh hưởng bởi tư duy của lập trình viên nên sẽ thiết kế test case khách quan và triệt để hơn.",
        28: "Thẩm định (Validation) nhằm mục đích trả lời câu hỏi: 'Sản phẩm có làm đúng những gì khách hàng thực sự mong muốn hay không?'.",
        29: "Trong giai đoạn phát triển hệ thống (development phase), kiểm thử chấp nhận (acceptance testing) chưa được thực hiện vì nó thuộc về pha bàn giao.",
        30: "Kiểm thử điều kiện (condition testing) hướng tới kiểm tra toàn bộ các nhánh điều kiện luận lý (boolean expressions) có trong module.",
        31: "Kiểm thử dòng dữ liệu (data flow testing) lựa chọn các đường dẫn kiểm thử dựa trên các vị trí định nghĩa và sử dụng của các biến.",
        32: "Chiến lược kiểm thử tốt nhất là tiến hành lập kế hoạch và thực hiện các hoạt động kiểm thử song song với mọi giai đoạn phát triển.",
        33: "Kiểm thử chấp nhận (Acceptance testing) được thực hiện bởi người dùng cuối để quyết định xem có tiếp nhận bàn giao hệ thống hay không.",
        34: "Trong kiểm thử giá trị biên robust cho n biến độc lập, số lượng test case cần thiết là 6n + 1 (hoặc xấp xỉ 6n trường hợp).",
        35: "Đoạn mã có 3 nhánh rẽ logic độc lập, do đó cần tối thiểu 3 test case để đạt độ bao phủ quyết định (decision coverage) 100%.",
        36: "Phân tích giá trị biên (BVA) kiểm tra tại các điểm ranh giới của miền xác định: {min-, min, min+, max-, max, max+}.",
        37: "Với biên đóng [a, b], các giá trị kiểm thử biên tương ứng được chọn là: a-1, a, a+1, b-1, b, b+1.",
        38: "Với miền xác định [10, 100], các giá trị biên tương ứng là: 9, 10, 11 (quanh biên 10) và 99, 100, 101 (quanh biên 100).",
        39: "Với miền mở 'b' < x < 'n', tương đương biên đóng 'c' <= x <= 'm'. Các giá trị biên được chọn là: 'b', 'c', 'd', 'l', 'm', 'n'.",
        55: "Với miền 0 < x <= 1000, tương đương biên đóng 1 <= x <= 1000. Các giá trị biên được chọn là: 0, 1, 2, 999, 1000, 1001.",
        40: "Trong kiểm thử hộp đen, kỹ thuật 'Kẻ phá hoại' (Ad-hoc / Stress testing) nhằm cố ý nhập dữ liệu dị biệt để làm sụp đổ hệ thống.",
        41: "Kiểu dữ liệu do người dùng tự định nghĩa (user-defined types) chỉ có giá trị sử dụng trong phạm vi chương trình/ứng dụng đó.",
        42: "Kiểm thử hộp trắng (White-box) tập trung vào cấu trúc bên trong của chương trình, điển hình là kiểm thử logic (logic test).",
        43: "Với biên 50 <= y < 500 (biên đóng ở 50, biên mở ở 500, tương đương 499). Các giá trị biên là: 49, 50, 51, 498, 499, 500.",
        44: "Với biên đóng 0 <= i <= 500. Các giá trị biên tương ứng là: -1, 0, 1, 499, 500, 501.",
        45: "Với biên -6 <= y < 600 (tương đương biên đóng từ -6 đến 599). Các giá trị biên là: -7, -6, -5, 598, 599, 600.",
        46: "Với biên đóng -10 <= a <= 800. Các giá trị biên tương ứng được chọn là: -11, -10, -9, 799, 800, 801.",
        47: "Chương trình tuần tự P nhận đầu vào x và chuyển thành đầu ra y, trong đó cả x và y đều phải được xác định rõ ràng từ trước.",
        48: "Tiên đề gán định nghĩa luật biến đổi trạng thái sau khi thực hiện câu lệnh gán giá trị của biểu thức cho biến.",
        49: "Tiên đề rẽ nhánh (if-then-else) định nghĩa luật kiểm tra tính đúng đắn cho cả hai nhánh rẽ (True và False) của điều kiện.",
        50: "Mệnh đề rẽ nhánh dạng đủ (if-then-else) chứng minh rằng cả hai hướng chạy đều dẫn đến trạng thái dữ liệu đầu ra {B} mong muốn.",
        51: "Tiên đề lặp (while-do) sử dụng bất biến vòng lặp {A} để chứng minh tính đúng đắn và trạng thái sau khi kết thúc vòng lặp {A, !E}.",
        52: "Tiên đề về tính bất biến chứng minh rằng đoạn chương trình P không làm thay đổi hay phá vỡ thuộc tính dữ liệu {A}.",
        53: "QC (Quality Control) tập trung vào các hoạt động kỹ thuật cụ thể nhằm đánh giá, kiểm tra chất lượng của sản phẩm đầu ra.",
        54: "QA (Quality Assurance) là hệ thống các hoạt động lên kế hoạch, giám sát quy trình phát triển để ngăn ngừa lỗi xảy ra từ đầu."
    },
    'Chương 6_clean.txt': {
        1: "Bảo trì phần mềm (software maintenance) là hoạt động sửa đổi, tiến hóa và phát triển phần mềm sau khi nó đã được bàn giao.",
        2: "Bảo trì thích ứng (Adaptive maintenance) là hoạt động sửa đổi phần mềm để tương thích với những thay đổi của môi trường phần cứng/phần mềm.",
        3: "Bảo trì phòng ngừa (Preventive maintenance) nhằm sửa đổi phần mềm để nâng cao khả năng bảo trì, độ tin cậy và tạo nền tảng cho tương lai.",
        4: "Bảo trì có cấu trúc (Structured maintenance) là bảo trì có hệ thống, đi theo đúng các bước kỹ nghệ: phân tích, thiết kế, cài đặt, kiểm thử.",
        5: "Trong công thức chi phí bảo trì M = p + K * exp(c - d), tham số K là hằng số kinh nghiệm của tổ chức.",
        6: "Trong công thức chi phí bảo trì M = p + K * exp(c - d), tham số d đại diện cho mức độ hiểu biết của đội ngũ về phần mềm đó.",
        7: "Bảo trì sửa lỗi (bug fixing) không phải là tên gọi chuẩn trong 4 loại bảo trì (Hiệu chỉnh, Thích ứng, Hoàn thiện, Phòng ngừa).",
        8: "Xóa hoặc thay đổi chương trình con ảnh hưởng trực tiếp đến logic thực thi của mã nguồn (Hiệu ứng lề mã nguồn - code side effect).",
        9: "Thay đổi việc mở/đóng file ảnh hưởng đến luồng truy cập file của mã nguồn, đây là dạng hiệu ứng lề mã nguồn.",
        10: "Thay đổi phép toán logic ảnh hưởng đến đường chạy của thuật toán, đây là dạng hiệu ứng lề mã nguồn.",
        11: "Bảo trì phần mềm bao gồm sửa lỗi tồn đọng, nâng cấp các tính năng sử dụng và bảo đảm an toàn vận hành cho hệ thống.",
        12: "Nếu chỉ có duy nhất mã nguồn mà không có tài liệu thiết kế/yêu cầu, việc hiểu hệ thống để bảo trì sẽ cực kỳ phức tạp.",
        13: "Khi có cấu hình phần mềm đầy đủ, bảo trì bắt đầu bằng việc xác định cấu trúc quan trọng, hành vi và các giao diện của nó.",
        14: "Phát biểu 'Chi phí bảo trì không ảnh hưởng nhiều tới năng suất' là sai. Thực tế chi phí bảo trì chiếm phần lớn và kéo tụt năng suất.",
        15: "Sự giảm sút năng suất lao động theo tỷ lệ 40:1 nghĩa là chi phí bảo trì mỗi dòng lệnh cao gấp 40 lần chi phí phát triển ban đầu.",
        16: "Hồ sơ bảo trì lưu trữ chi phí, lỗi, dòng lệnh thay đổi. Ngôn ngữ lập trình được sử dụng là thông số cố định, không đổi theo từng vụ bảo trì.",
        17: "Xác định giá trị bảo trì rất phức tạp do các hệ thống cũ thường thiếu thông tin ghi nhận lịch sử thay đổi.",
        18: "Bảo trì phần mềm là để sửa lỗi và giúp hệ thống tiến hóa, không phải để đập đi xây mới hoàn toàn một phiên bản thay thế.",
        19: "Hoạt động bảo trì tập trung vào sửa lỗi, thích ứng môi trường và tối ưu, việc phân tích thêm chức năng lớn mới thuộc phát triển mới.",
        20: "Yếu tố ít ảnh hưởng đến chi phí bảo trì nhất là mối quan hệ giữa các doanh nghiệp (yếu tố đối tác bên ngoài).",
        21: "Quản lý thay đổi phần mềm giúp kiểm soát các yêu cầu phát sinh hợp lý, loại bỏ những thay đổi bất chợt vô căn cứ của người dùng.",
        22: "Quản lý thay đổi (Change control) bắt đầu có hiệu lực ngay khi sản phẩm/tài liệu đầu tiên được nghiệm thu và đưa vào baseline.",
        23: "Thay đổi ảnh hưởng đến chạy thử các trường hợp biên là thay đổi về mã nguồn và logic chạy thử (hiệu ứng lề mã nguồn).",
        24: "Định nghĩa lại các hằng số ảnh hưởng đến giá trị dữ liệu sử dụng trong chương trình (hiệu ứng lề dữ liệu).",
        25: "Định nghĩa lại cấu trúc bản ghi hoặc cấu trúc file thay đổi trực tiếp cách thức lưu trữ dữ liệu (hiệu ứng lề dữ liệu)."
    }
}

# Compile questions database
final_db = {
    '1': ch1_questions
}

# Load from parsed_questions.json and compile for Ch 2-6
for filename, q_list in parsed_data.items():
    chapter_num = ''
    if 'Chương 2' in filename:
        chapter_num = '2'
    elif 'Chương 3' in filename:
        chapter_num = '3'
    elif 'Chương 4' in filename:
        chapter_num = '4'
    elif 'Chương 5' in filename:
        chapter_num = '5'
    elif 'Chương 6' in filename:
        chapter_num = '6'
        
    ans_map = answer_maps[filename]
    exp_map = explanations[filename]
    
    compiled_qs = []
    for q in q_list:
        q_id = q['id']
        # Fallback to index 0 if not mapped
        ans_idx = ans_map.get(q_id, 0)
        # Fallback to general explanation if not mapped
        exp_text = exp_map.get(q_id, f"Đáp án đúng là {q['options'][ans_idx] if ans_idx < len(q['options']) else 'A'} dựa trên lý thuyết môn học.")
        
        compiled_qs.append({
            'id': q_id,
            'question': q['question'],
            'options': q['options'],
            'answer': ans_idx,
            'explanation': exp_text
        })
        
    final_db[chapter_num] = compiled_qs
    print(f"Compiled Chapter {chapter_num}: {len(compiled_qs)} questions")

# Output to questions_db.js
js_content = f"// Compiled Questions Database for Software Engineering Quiz\nconst questionsDB = {json.dumps(final_db, ensure_ascii=False, indent=2)};\n"

with open('questions_db.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

print("Database written to questions_db.js successfully!")
