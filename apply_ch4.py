import json
import re

correct_ch4 = {
  1: {"answer": 0, "exp": "Bảo trì phần mềm là giai đoạn chiếm nhiều chi phí nhất. Mã nguồn rõ ràng, cài đặt tốt giúp việc đọc hiểu, sửa lỗi và nâng cấp dễ dàng hơn."},
  2: {"answer": 0, "exp": "Phong cách lập trình và cách chọn ngôn ngữ ảnh hưởng trực tiếp đến khả năng bảo trì, hiệu năng và chất lượng tổng thể của phần mềm."},
  3: {"answer": 2, "exp": "Phong cách lập trình tốt đề cao tính đơn giản, dễ đọc và dễ bảo trì thay vì dùng các cú pháp quá phức tạp gây khó hiểu."},
  4: {"answer": 0, "exp": "Chuẩn hóa quy tắc khai báo biến giúp lập trình viên dễ dàng tìm kiếm, theo dõi luồng dữ liệu, hỗ trợ tốt cho kiểm thử và gỡ lỗi."},
  5: {"answer": 0, "exp": "Lập trình cấu trúc (Structured Programming) với 3 cấu trúc cơ bản (tuần tự, rẽ nhánh, lặp) giúp mã nguồn mạch lạc và dễ kiểm soát luồng điều khiển."},
  6: {"answer": 3, "exp": "Việc sử dụng lại (reuse) các đoạn chương trình giống nhau là một thực tiễn tốt (best practice) nên được khuyến khích, chứ không phải cần tránh."},
  7: {"answer": 3, "exp": "Ngôn ngữ thế hệ 1 (mã máy) giao tiếp trực tiếp với CPU, không qua biên dịch/phiên dịch nên cho tốc độ thực thi nhanh nhất."},
  8: {"answer": 0, "exp": "Đặc trưng của thế hệ 2 là sự xuất hiện của các thư viện phần mềm dùng chung và việc nó được chấp nhận rộng rãi trong tính toán khoa học/thương mại."},
  9: {"answer": 0, "exp": "Ngôn ngữ thế hệ thứ 4 (4GL) hướng tới việc khai báo 'làm cái gì' thay vì 'làm như thế nào', ẩn đi chi tiết thuật toán phức tạp."},
  10: {"answer": 0, "exp": "SQL (Structured Query Language) là ngôn ngữ hỏi đáp, khai báo để thao tác với Cơ sở dữ liệu."},
  11: {"answer": 3, "exp": "C++ là ngôn ngữ đa hình thức (multi-paradigm), hỗ trợ cả lập trình hướng thủ tục/cấu trúc (từ C) và lập trình hướng đối tượng."},
  12: {"answer": 2, "exp": "Prolog là ngôn ngữ lập trình theo hướng logic (Logic Programming), chủ yếu dùng cho AI và hệ chuyên gia."},
  13: {"answer": 3, "exp": "*.cpp là phần mở rộng đặc trưng của file mã nguồn C++ (ngôn ngữ hướng đối tượng)."},
  14: {"answer": 2, "exp": "Trong các lựa chọn, *.cpp đại diện cho C++ là một ngôn ngữ lập trình Hướng đối tượng tiêu biểu."},
  15: {"answer": 1, "exp": "PROLOG được sinh ra dành riêng cho việc suy luận logic và giải quyết các bài toán Trí tuệ nhân tạo (AI)."},
  16: {"answer": 0, "exp": "Lập trình cấu trúc nổi bật với tính đơn thể và nguyên tắc '1 lối vào, 1 lối ra' cho mỗi khối lệnh."},
  17: {"answer": 1, "exp": "Lập trình hướng đối tượng (OOP) đóng gói cả dữ liệu (thuộc tính) và các hàm xử lý (phương thức) vào trong một đối tượng."},
  18: {"answer": 0, "exp": "PHP là ngôn ngữ kịch bản chạy trên máy chủ, được thiết kế đặc biệt cho việc phát triển các ứng dụng Web."},
  19: {"answer": 3, "exp": "SQL là chuẩn ngôn ngữ công nghiệp chuyên biệt dùng để truy vấn và thao tác trên cơ sở dữ liệu quan hệ."},
  20: {"answer": 3, "exp": "Theo bảng đối chiếu trong giáo trình, SQL (và một số ngôn ngữ như COBOL) hỗ trợ xử lý kiểu ứng dụng theo lô (Batch processing)."},
  21: {"answer": 0, "exp": "Ngôn ngữ tự nhiên có tính đa nghĩa, rườm rà nên rất dễ gây hiểu nhầm nếu dùng để biểu diễn các bước thuật toán chính xác."},
  22: {"answer": 3, "exp": "Điểm trung bình (ví dụ 7.5, 8.2) là giá trị thập phân nên cần lưu trữ ở kiểu Số thực (Float/Double)."},
  23: {"answer": 2, "exp": "Tuổi thọ là số nguyên dương (ví dụ 25, 60), không có phần thập phân nên kiểu Số nguyên là phù hợp nhất."},
  24: {"answer": 0, "exp": "Trong đánh giá thuật toán, tối ưu 'không gian' (Space Complexity) nghĩa là sử dụng càng ít bộ nhớ RAM càng tốt."},
  25: {"answer": 3, "exp": "Dựa vào bảng tiêu chí ứng dụng, C không đánh dấu phù hợp cho kiểu ứng dụng chạy theo lô."},
  26: {"answer": 2, "exp": "Theo bảng tiêu chí của giáo trình, Prolog không hỗ trợ mạnh mẽ cho các ứng dụng trực tuyến (Online applications)."},
  27: {"answer": 2, "exp": "Prolog hướng tới suy diễn logic, không phải ngôn ngữ tối ưu cho các bài toán truy vấn CSDL thông thường như SQL hay Focus."},
  28: {"answer": 2, "exp": "Cobol chuyên cho xử lý số liệu thương mại, không phù hợp cho các hệ thống Hệ chuyên gia hay Hỗ trợ quyết định (DSS)."},
  29: {"answer": 2, "exp": "Theo bảng tiêu chí giáo trình, C có thể được sử dụng trong các hệ thống thông tin điều hành (EIS)."},
  30: {"answer": 0, "exp": "Biến (Variable) là một ô nhớ có tên, dùng để lưu trữ dữ liệu và giá trị của nó có thể thay đổi trong lúc chạy."},
  31: {"answer": 3, "exp": "Tính kế thừa, đa hình và đóng gói là đặc trưng của OOP. 'Tính logic' thuộc về phương pháp lập trình logic (như Prolog)."},
  32: {"answer": 0, "exp": "*.jsp (JavaServer Pages) là phần mở rộng của trang web động được xây dựng dựa trên công nghệ Java."},
  33: {"answer": 0, "exp": "Một lớp (Class) trong OOP luôn bao gồm hai thành phần cơ bản: Thuộc tính (dữ liệu) và Phương thức (hành vi)."},
  34: {"answer": 1, "exp": "Thuộc tính (Attribute/Property) dùng để lưu trữ trạng thái của đối tượng, được cài đặt thông qua các Biến hoặc Hằng."},
  35: {"answer": 0, "exp": "Chú thích (Comment) bị trình biên dịch bỏ qua, tác dụng duy nhất là để con người đọc hiểu và giải thích mã nguồn."},
  36: {"answer": 2, "exp": "Phần mềm quản lý sách đòi hỏi việc lưu trữ, tìm kiếm và truy xuất thông tin lớn, do đó nên dùng lập trình hướng Cơ sở dữ liệu."},
  37: {"answer": 1, "exp": "Giai đoạn thiết kế phần mềm sẽ chốt phương án về kiến trúc, tổ chức dữ liệu và đánh giá độ phức tạp của thuật toán."},
  38: {"answer": 0, "exp": "Phong cách khai báo biến, định dạng mã nguồn được thiết lập ở khâu 'Chương trình được sinh ra' (giai đoạn Coding/Cài đặt)."},
  39: {"answer": 2, "exp": "Tầm vực của dữ liệu thường được chia làm hai loại chính: Toàn cục (Global - dùng chung) và Cục bộ (Local - nội bộ hàm)."},
  40: {"answer": 0, "exp": "Giao diện Vào/Ra (I/O) là cách mà chương trình tương tác với thế giới bên ngoài, do đó ảnh hưởng trực tiếp đến trải nghiệm người dùng."},
  41: {"answer": 3, "exp": "Kiểu dữ liệu tự định nghĩa (User-defined type) thường chỉ có phạm vi sử dụng và ý nghĩa trong khuôn khổ của một ứng dụng cụ thể."},
  42: {"answer": 0, "exp": "Chương trình có 1 vòng lặp for chạy từ 1 tới n, mỗi lần lặp thực hiện phép tính O(1) -> Tổng độ phức tạp là O(n)."},
  43: {"answer": 1, "exp": "Không có vòng lặp, chỉ có biểu thức toán học tính một lần duy nhất, độ phức tạp là hằng số O(1)."},
  44: {"answer": 3, "exp": "Hai vòng lặp for lồng nhau: vòng ngoài n lần, vòng trong m lần -> Số lần chạy là n * m -> Độ phức tạp O(n*m)."},
  45: {"answer": 1, "exp": "Biểu thức tính toán toán học độc lập không có vòng lặp, độ phức tạp là O(1)."},
  46: {"answer": 2, "exp": "Ba vòng lặp lồng nhau, mỗi vòng lặp n lần -> Tổng số bước n * n * n = n^3 -> Độ phức tạp O(n^3)."},
  47: {"answer": 1, "exp": "Chỉ có một vòng lặp đơn for chạy n lần -> Độ phức tạp tuyến tính O(n)."},
  48: {"answer": 2, "exp": "Hai vòng lặp lồng nhau đều chạy n lần -> Độ phức tạp O(n^2)."},
  49: {"answer": 2, "exp": "Hai vòng lặp lồng nhau chạy n lần, lệnh x++ tốn O(1) -> Độ phức tạp O(n^2)."},
  50: {"answer": 0, "exp": "Đây chỉ là một lệnh gán thực hiện tính toán cơ bản, chạy đúng 1 lần -> Độ phức tạp O(1)."},
  51: {"answer": 0, "exp": "Lệnh tính mod và lũy thừa chạy đúng 1 lần không lặp -> Độ phức tạp O(1)."},
  52: {"answer": 3, "exp": "Ba vòng lặp lồng nhau, mỗi vòng chạy n lần -> Độ phức tạp O(n^3)."},
  53: {"answer": 3, "exp": "Tương tự, 3 vòng lặp lồng nhau chạy tối đa n lần mỗi vòng -> Độ phức tạp O(n^3)."},
  54: {"answer": 3, "exp": "Hai vòng lặp lồng nhau, vòng ngoài chạy n lần, vòng trong chạy m lần -> O(n*m)."},
  55: {"answer": 2, "exp": "Hai vòng lặp lồng nhau chạy n và m lần -> O(n*m)."},
  56: {"answer": 0, "exp": "Định nghĩa chương trình tuần tự là biến đổi x thành y, trong đó cả x và y đã được xác định trước."},
  57: {"answer": 1, "exp": "Đây là phát biểu mô tả Tiên đề gán (Assignment Axiom) trong logic Hoare."},
  58: {"answer": 2, "exp": "If-then-else là cấu trúc rẽ nhánh, nên đây là nội dung của Tiên đề rẽ nhánh (Conditional Axiom)."},
  59: {"answer": 3, "exp": "Cấu trúc While-Do phụ thuộc vào bất biến vòng lặp, được định nghĩa bởi Tiên đề lặp (Loop Axiom)."},
  60: {"answer": 3, "exp": "Khi trạng thái {A} không đổi sau đoạn P, P được gọi là bất biến đối với A. Đây là Tiên đề bất biến (Invariance Axiom)."},
  61: {"answer": 1, "exp": "QA (Quality Assurance) đánh giá và đảm bảo chất lượng trên toàn bộ quy trình, phân biệt với QC chỉ tập trung vào kiểm tra sản phẩm cuối."},
  62: {"answer": 1, "exp": "Bộ nhớ động (dynamic memory) được cấp phát thông qua các con trỏ ngay tại thời điểm chạy (runtime) khi thực sự cần thiết."}
}

def main():
    with open('questions_db.js', 'r', encoding='utf-8') as f:
        content = f.read()
        
    match = re.search(r'const questionsDB = (\{.*\});?', content, re.DOTALL)
    db = json.loads(match.group(1))
    
    for q in db['4']:
        qid = q['id']
        if qid in correct_ch4:
            q['answer'] = correct_ch4[qid]['answer']
            q['explanation'] = correct_ch4[qid]['exp']
            
    new_content = "const questionsDB = " + json.dumps(db, ensure_ascii=False, indent=2) + ";\n"
    if "module.exports" in content:
        new_content += "\nmodule.exports = questionsDB;\n"
        
    with open('questions_db.js', 'w', encoding='utf-8') as f:
        f.write(new_content)
        
    print("Fixed Chapter 4!")

if __name__ == '__main__':
    main()
