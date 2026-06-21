import json
import re

correct_ch5 = {
  1: {"answer": 3, "exp": "Kiểm thử phần mềm thường tốn kém, nhàm chán và hiếm khi được các lập trình viên hoan nghênh."},
  2: {"answer": 0, "exp": "Lỗi chiến lược (strategic error) là những sai sót nghiêm trọng do hiểu sai yêu cầu hoặc ý đồ thiết kế sai ngay từ đầu."},
  3: {"answer": 2, "exp": "Lỗi cú pháp (syntax error) là lỗi vi phạm quy tắc ngữ pháp của ngôn ngữ, thường bị phát hiện ngay lúc biên dịch."},
  4: {"answer": 3, "exp": "Lỗi hiệu ứng phụ (side effect) là khi một hàm thay đổi giá trị biến dùng chung ngoài dự định của lập trình viên."},
  5: {"answer": 3, "exp": "Mục đích của phân tích thất bại là để nâng cao độ tin cậy, KHÔNG PHẢI để tìm cá nhân chịu trách nhiệm (đổ lỗi)."},
  6: {"answer": 1, "exp": "Thử nghiệm tĩnh (Static testing) không chạy code mà dùng để phân tích tài liệu/mã nguồn nhằm xác định trước các hư hỏng."},
  7: {"answer": 0, "exp": "Trình tự: (1) Xác định độ đo -> (2) Sinh dữ liệu thử -> (3) Áp dụng kiểm thử -> (4) Tính toán độ tin cậy."},
  8: {"answer": 1, "exp": "Các lỗi phần mềm gián tiếp gây nguy hiểm (như sai CSDL y tế) thuộc nhóm An toàn sinh mệnh thứ cấp (secondary safety-critical)."},
  9: {"answer": 0, "exp": "Lập trình phòng thủ (Defensive programming) luôn giả định có lỗi/ngoại lệ để chủ động viết code bắt lỗi an toàn."},
  10: {"answer": 0, "exp": "Xác minh (Verification) và Thẩm định (Validation) là tiến trình kiểm soát chất lượng phải xuyên suốt toàn bộ vòng đời phần mềm."},
  11: {"answer": 0, "exp": "Thẩm định (Validation) trả lời câu hỏi: 'Chúng ta có xây dựng đúng sản phẩm khách hàng cần không?'."},
  12: {"answer": 1, "exp": "Xác minh (Verification) trả lời câu hỏi: 'Chúng ta có đang xây dựng sản phẩm đúng với tài liệu đặc tả không?'."},
  13: {"answer": 0, "exp": "Trình tự đặc tả: (c) Phân tích hệ quả thất bại -> (a) Phân nhóm -> (b) Đặt yêu cầu độ tin cậy cho từng nhóm."},
  14: {"answer": 2, "exp": "Độ tin cậy được định lượng dựa trên tần suất và số lượng các thất bại (failures) xuất hiện khi hệ thống vận hành."},
  15: {"answer": 0, "exp": "Tính toán sai thời gian hoàn thành dự án là lỗi Quản lý dự án, không phải là Lỗi kỹ thuật của bản thân Phần mềm."},
  16: {"answer": 2, "exp": "Lỗi chức năng thường rơi vào hai trường hợp: phần mềm không làm việc cần làm (thiếu) hoặc làm việc không được phép làm (sai)."},
  17: {"answer": 0, "exp": "Mục đích của kiểm thử là tìm ra lỗi, do đó một ca kiểm thử 'thành công' là ca kiểm thử phát hiện được lỗi tiềm ẩn."},
  18: {"answer": 3, "exp": "Kiểm tra phát triển (Development Test) bao gồm kiểm thử Đơn vị, Module, Tích hợp, Hệ thống. 'Kiểm tra mã nguồn' không phải một giai đoạn tiêu chuẩn."},
  19: {"answer": 0, "exp": "Sự đánh giá của bên thứ 3/khách hàng thường nằm ở giai đoạn QA độc lập và Kiểm thử Chấp nhận (Acceptance testing)."},
  20: {"answer": 1, "exp": "Kiểm thử hộp trắng (White-box) nhìn vào cấu trúc bên trong, đường chạy và logic/giải thuật chi tiết của mã nguồn."},
  21: {"answer": 2, "exp": "Kiểm thử từ trên xuống (Top-down) chú trọng tích hợp module điều khiển chính trước, giả lập các module cấp thấp."},
  22: {"answer": 2, "exp": "Đoán lỗi (Error guessing) hoàn toàn dựa vào kinh nghiệm kiểm thử viên về đầu vào/đầu ra, thuộc nhóm Hộp đen (Black-box)."},
  23: {"answer": 2, "exp": "Vì Top-down tích hợp từ module cấp cao nhất (thường là UI) nên rất thuận tiện để sớm nhìn thấy và kiểm thử giao diện màn hình."},
  24: {"answer": 0, "exp": "Kiểm thử là quá trình chạy chương trình để đánh giá xem hệ thống có làm đúng và thỏa mãn yêu cầu đã thiết kế hay không."},
  25: {"answer": 3, "exp": "Hệ thống lớn có 5 mức kiểm thử chuẩn: Đơn vị (Unit) -> Module -> Hệ con (Sub-system) -> Hệ thống (System) -> Nghiệm thu (Acceptance)."},
  26: {"answer": 2, "exp": "Bộ kiểm toán mã (Code auditor) tự động phân tích code tĩnh để đảm bảo mã nguồn tuân thủ các tiêu chuẩn lập trình."},
  27: {"answer": 1, "exp": "Đội kiểm thử độc lập (IV&V) không bị thiên kiến của người code nên sẽ thiết kế bài test khách quan và triệt để hơn."},
  28: {"answer": 0, "exp": "Validation (Thẩm định) nhằm đối chiếu sản phẩm cuối cùng với kỳ vọng và nhu cầu thực tế của người dùng/khách hàng."},
  29: {"answer": 1, "exp": "Kiểm thử từ dưới lên (Bottom-up) là một chiến lược tích hợp, không phải là một mức độ/giai đoạn kiểm thử tổng thể như Unit hay Acceptance."},
  30: {"answer": 1, "exp": "Kiểm thử điều kiện (Condition testing) tập trung thực thi tất cả các nhánh của các biểu thức logic (True/False) trong code."},
  31: {"answer": 2, "exp": "Kiểm thử dòng dữ liệu (Data flow testing) duyệt đồ thị luồng điều khiển dựa trên vị trí biến được khai báo và vị trí được sử dụng."},
  32: {"answer": 3, "exp": "Kiểm thử không nên để đến cuối mới làm. Nó phải diễn ra song song và xuyên suốt tất cả các giai đoạn của vòng đời phát triển."},
  33: {"answer": 1, "exp": "Kiểm thử chấp nhận (Acceptance test / UAT) phải do người dùng cuối (End-user) thực hiện để quyết định có nhận phần mềm hay không."},
  34: {"answer": 1, "exp": "Trong kiểm thử giá trị biên Robust cho n biến, công thức lý thuyết tổng số test case thường có dạng xấp xỉ 6n."},
  35: {"answer": 2, "exp": "Có 3 luồng xử lý riêng biệt: (1) if, (2) else if, (3) else. Do đó cần ít nhất 3 test cases để duyệt qua hết 100% nhánh quyết định."},
  36: {"answer": 0, "exp": "Phân tích giá trị biên (Boundary Value Analysis) chọn bộ 6 điểm kiểm thử bao quanh ranh giới min và max."},
  37: {"answer": 0, "exp": "Với miền đóng a <= y1 <= b, ta cần test quanh điểm a (a-1, a, a+1) và quanh điểm b (b-1, b, b+1)."},
  38: {"answer": 3, "exp": "Với biên 10 <= x <= 100, lấy 6 giá trị: (9, 10, 11) và (99, 100, 101)."},
  39: {"answer": 0, "exp": "Miền 'b' < x < 'n' là khoảng mở, tương đương với đoạn kín 'c' <= x <= 'm', do đó ta dùng các giá trị xoay quanh c và m."},
  55: {"answer": 0, "exp": "Miền 0 < x <= 1000 tương đương với 1 <= x <= 1000, nên các biên là (0, 1, 2) và (999, 1000, 1001)."},
  40: {"answer": 2, "exp": "Trong thử nghiệm, có kiểu tiếp cận mô phỏng 'kẻ phá hoại' (destructive testing) để xem ứng dụng có chịu lỗi tốt không."},
  41: {"answer": 2, "exp": "Một trong các nguyên tắc kiểm thử là phải luôn tiến hành kiểm thử trên môi trường và bộ dữ liệu thật (hoặc giống thật nhất)."},
  42: {"answer": 0, "exp": "Kiểm tra logic (Logic test) đi sâu vào luồng xử lý và biểu thức bên trong code, nên đây là phương pháp hộp trắng (White-box)."},
  43: {"answer": 0, "exp": "Khoảng 50 <= y < 500 đóng tại 50 và mở tại 500 (tức là max = 499), nên tập giá trị biên là (49, 50, 51) và (498, 499, 500)."},
  44: {"answer": 0, "exp": "Tương tự, biên đóng tại 0 và 500 sẽ chọn ( -1, 0, 1 ) và ( 499, 500, 501 )."},
  45: {"answer": 0, "exp": "Biên -6 <= y < 600 tương đương kín ở -6 và 599. Biên sẽ là (-7, -6, -5) và (598, 599, 600)."},
  46: {"answer": 0, "exp": "Biên đóng -10 <= a <= 800 sẽ chọn các điểm (-11, -10, -9) và (799, 800, 801)."},
  47: {"answer": 0, "exp": "Với lập trình tuần tự, để biến đổi x thành y thì cả input x và output y đều phải được xác định/khai báo cụ thể từ trước."},
  48: {"answer": 1, "exp": "Định lý mô tả sau khi gán x := E thì tính chất bị biến đổi chính là nội dung của Tiên đề Gán (Assignment Axiom)."},
  49: {"answer": 2, "exp": "Đây là nội dung của Tiên đề rẽ nhánh (dạng if-then khuyết thiếu nhánh else)."},
  50: {"answer": 2, "exp": "Mô hình IF-THEN-ELSE phản ánh luồng chia nhánh quyết định đầy đủ trong Tiên đề Rẽ nhánh."},
  51: {"answer": 3, "exp": "Tiên đề Lặp (Loop Axiom) chứng minh tính đúng đắn cho vòng lặp WHILE thông qua tính bất biến (Loop Invariant)."},
  52: {"answer": 3, "exp": "Khi dữ liệu A không bị thay đổi sau khi P chạy qua, ta gọi là Tiên đề về tính bất biến (Invariance Axiom)."},
  53: {"answer": 1, "exp": "QC (Quality Control / Kiểm soát chất lượng) là những bước đánh giá, tìm lỗi trực tiếp trên sản phẩm đã thành hình."},
  54: {"answer": 1, "exp": "QA (Quality Assurance / Đảm bảo chất lượng) thiên về quản lý, giám sát quy trình và ngăn ngừa lỗi từ trong trứng nước."}
}

correct_ch6 = {
  1: {"answer": 0, "exp": "Bảo trì là việc thay đổi, sửa lỗi và nâng cấp tiếp tục cho một hệ thống phần mềm đã được chuyển giao sử dụng."},
  2: {"answer": 0, "exp": "Bảo trì thích hợp/thích ứng (Adaptive Maintenance) nhằm giúp phần mềm hoạt động tốt khi hệ điều hành, CSDL hoặc môi trường thay đổi."},
  3: {"answer": 2, "exp": "Bảo trì hoàn thiện (Perfective Maintenance) giúp tối ưu hiệu năng, độ tin cậy và thêm các tiện ích để hoàn hảo hệ thống hơn."},
  4: {"answer": 3, "exp": "Bảo trì cấu trúc là hoạt động bảo trì chuyên nghiệp, tuân theo quy trình công nghệ phần mềm rõ ràng thay vì vá lỗi tạm bợ."},
  5: {"answer": 0, "exp": "Trong công thức chi phí bảo trì M = p + (K*exp(c-d)), K đóng vai trò là một hằng số rút ra từ kinh nghiệm."},
  6: {"answer": 1, "exp": "Trong công thức đó, d tượng trưng cho mức độ hiểu biết (knowledge) của đội ngũ kỹ sư về phần mềm."},
  7: {"answer": 3, "exp": "Bốn loại bảo trì chuẩn là: Hiệu chỉnh (Sửa lỗi), Thích ứng, Hoàn thiện và Phòng ngừa. 'Bảo trì sửa lỗi' (Corrective) thường bị trùng lấp."},
  8: {"answer": 3, "exp": "Việc xóa hoặc đổi tên hàm/module ảnh hưởng tới các nơi gọi nó, tạo ra hiệu ứng lề chương trình con (subprogram side effect)."},
  9: {"answer": 0, "exp": "Thay đổi cách đóng/mở file hay format file sẽ ảnh hưởng đến luồng dữ liệu truyền vào/ra, gây hiệu ứng lề dữ liệu."},
  10: {"answer": 2, "exp": "Sửa đổi phép toán logic (if/else) tác động trực tiếp đến giải thuật mã nguồn, tạo hiệu ứng lề mã nguồn (code side effect)."},
  11: {"answer": 3, "exp": "Bảo trì phần mềm bao quát cả 3 hoạt động: Sửa lỗi tồn đọng, Nâng cấp tính năng mới và Đảm bảo vận hành an toàn."},
  12: {"answer": 2, "exp": "Bảo trì chỉ dựa vào mã nguồn (không có tài liệu mô tả) được gọi là bảo trì phi cấu trúc, cực kỳ khó khăn và rủi ro cao."},
  13: {"answer": 0, "exp": "Với hệ thống chuẩn, trước khi sửa code, kỹ sư phải đánh giá tài liệu thiết kế để hiểu rõ logic kiến trúc của phần mềm trước."},
  14: {"answer": 3, "exp": "Chi phí bảo trì khổng lồ hoàn toàn có khả năng vắt kiệt nguồn lực của doanh nghiệp và làm đình trệ mọi dự án phát triển mới."},
  15: {"answer": 0, "exp": "Tỷ lệ 40:1 chỉ ra sự đắt đỏ của bảo trì: Viết 1 dòng lệnh mới tốn 25 đô, nhưng chi phí vòng đời để bảo trì nó tốn 1000 đô."},
  16: {"answer": 0, "exp": "Hồ sơ bảo trì quan tâm đến chi phí, nguyên nhân lỗi và lịch sử cập nhật. Số lượng lệnh trong file nguồn là số liệu tĩnh, ít giá trị lưu trữ."},
  17: {"answer": 2, "exp": "Xác định được chính xác ngân sách bảo trì là rất phức tạp vì phần mềm vô hình và phụ thuộc nhiều vào chất lượng code nền tảng."},
  18: {"answer": 0, "exp": "Bảo trì dùng để tiến hóa và vá lỗi hệ thống hiện tại. Nếu 'thay thế hoàn toàn bằng phiên bản mới' thì gọi là đập đi xây lại dự án mới."},
  19: {"answer": 1, "exp": "Phân tích và phát triển thêm chức năng cốt lõi (quy mô lớn) là dự án Mới, không được tính vào kinh phí bảo trì hệ thống cũ."},
  20: {"answer": 2, "exp": "Chi phí bảo trì bị ảnh hưởng bởi code, tài liệu và môi trường nhân sự nội bộ. Mối quan hệ với công ty khác không tác động trực tiếp."},
  21: {"answer": 3, "exp": "Quản lý thay đổi giúp duy trì tiến độ bằng cách đánh giá kỹ và đáp ứng các yêu cầu hợp lý, đồng thời từ chối các ý thích nhất thời."},
  22: {"answer": 1, "exp": "Quản lý thay đổi bắt đầu hoạt động ngay từ khi sản phẩm/tài liệu đầu tiên (như bản đặc tả SRS) được chính thức phê duyệt."},
  23: {"answer": 2, "exp": "Chạy thử biên thất bại sau khi sửa code nghĩa là logic thuật toán bị sai, dẫn tới hiệu ứng lề mã nguồn (Source code side effect)."},
  24: {"answer": 2, "exp": "Hằng số hoặc biến môi trường bị định nghĩa lại làm thay đổi giá trị bộ nhớ, tạo nên hiệu ứng lề dữ liệu (Data side effect)."},
  25: {"answer": 2, "exp": "Cấu trúc bản ghi hoặc Database thay đổi thì cách đọc/ghi dữ liệu bị lệch lạc, gây lỗi luồng dữ liệu (Data side effect)."}
}

def main():
    with open('questions_db.js', 'r', encoding='utf-8') as f:
        content = f.read()
        
    match = re.search(r'const questionsDB = (\{.*\});?', content, re.DOTALL)
    db = json.loads(match.group(1))
    
    for q in db['5']:
        qid = q['id']
        if qid in correct_ch5:
            q['answer'] = correct_ch5[qid]['answer']
            q['explanation'] = correct_ch5[qid]['exp']
            
    for q in db['6']:
        qid = q['id']
        if qid in correct_ch6:
            q['answer'] = correct_ch6[qid]['answer']
            q['explanation'] = correct_ch6[qid]['exp']
            
    new_content = "const questionsDB = " + json.dumps(db, ensure_ascii=False, indent=2) + ";\n"
    if "module.exports" in content:
        new_content += "\nmodule.exports = questionsDB;\n"
        
    with open('questions_db.js', 'w', encoding='utf-8') as f:
        f.write(new_content)
        
    print("Fixed Chapters 5 and 6!")

if __name__ == '__main__':
    main()
