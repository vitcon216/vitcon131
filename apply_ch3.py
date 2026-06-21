import json
import re

correct_ch3 = {
  354: {"answer": 1, "exp": "Giai đoạn Phân tích trả lời câu hỏi 'Làm cái gì' (What), còn giai đoạn Thiết kế trả lời câu hỏi 'Làm như thế nào' (How)."},
  355: {"answer": 0, "exp": "Thiết kế là giai đoạn nền tảng, các quyết định ở bước này ảnh hưởng trực tiếp đến chất lượng, chi phí bảo trì và sự thành công của sản phẩm."},
  356: {"answer": 0, "exp": "Thiết kế là bước tiếp nhận các yêu cầu hệ thống đã được phân tích và chuyển đổi chúng thành kiến trúc, dữ liệu và giao diện."},
  357: {"answer": 2, "exp": "Về mặt quản lý dự án, tiến trình thiết kế thường chia làm hai bước lớn: Thiết kế sơ bộ (mức cao) và Thiết kế chi tiết."},
  358: {"answer": 1, "exp": "Về khía cạnh kỹ thuật, thiết kế bao gồm: dữ liệu, kiến trúc, thủ tục, đối tượng và giao diện."},
  359: {"answer": 0, "exp": "Quá trình thiết kế luôn đi từ trừu tượng (phi hình thức) đến cụ thể (hình thức) và cuối cùng là bản thiết kế hoàn chỉnh."},
  360: {"answer": 1, "exp": "Đặc tả trừu tượng ở mức kiến trúc là việc xác định rõ các dịch vụ và ràng buộc của từng hệ thống con."},
  361: {"answer": 2, "exp": "Thiết kế cấu trúc dữ liệu là định nghĩa cụ thể cách tổ chức, lưu trữ dữ liệu để dùng cho hệ thống."},
  362: {"answer": 3, "exp": "Thiết kế giao diện (Interface design) ở mức hệ thống con là đặc tả cách mà các hệ con giao tiếp với nhau."},
  363: {"answer": 2, "exp": "Thiết kế thành phần (Component design) tập trung vào việc phân chia dịch vụ của hệ con thành các thành phần (modules) nhỏ hơn."},
  364: {"answer": 2, "exp": "Thiết kế bao gồm cả việc định hình kiến trúc tổng thể lẫn chọn lựa thuật toán, cấu trúc dữ liệu chi tiết cho từng thành phần."},
  365: {"answer": 1, "exp": "Vì thiết kế là một quá trình sáng tạo và đánh giá lựa chọn, nên có thể có nhiều giải pháp thiết kế khác nhau cho cùng một bài toán."},
  366: {"answer": 3, "exp": "Kết quả thiết kế thường chia làm 3 thành phần chính: Dữ liệu, Xử lý và Giao diện. 'Chức năng' đã được xác định ở khâu Phân tích."},
  367: {"answer": 2, "exp": "Bản thiết kế giao diện phải mô tả cả mặt hình thức (giao diện tĩnh) và các thao tác/giao tác tương tác của người dùng."},
  368: {"answer": 2, "exp": "Thành phần xử lý mô tả các cấu trúc/kiểu dữ liệu và các hàm/thuật toán để thao tác trên dữ liệu đó."},
  369: {"answer": 3, "exp": "Kết quả thiết kế dữ liệu mô tả cấu trúc lưu trữ (CSDL, tập tin) chứ không bao gồm kết quả (output) khi chương trình chạy."},
  370: {"answer": 0, "exp": "Tài liệu Yêu cầu (SRS) mới là cơ sở hợp đồng. Bản thiết kế là tài liệu kỹ thuật dành cho đội lập trình và bảo trì."},
  371: {"answer": 2, "exp": "Mặc dù Thiết kế Hướng đối tượng sinh ra để phục vụ OOP, ta vẫn có thể dùng các nguyên lý của nó để cài đặt bằng ngôn ngữ hướng thủ tục."},
  372: {"answer": 1, "exp": "Chất lượng thiết kế đo lường qua các tiêu chí: Kết dính (Cohesion) cao, Ghép nối (Coupling) thấp, Sự hiểu được và Tính thích nghi."},
  373: {"answer": 1, "exp": "Đặc trưng cốt lõi của OOP là các đối tượng đóng gói dữ liệu và chỉ giao tiếp với nhau qua việc trao đổi thông báo (Message passing)."},
  374: {"answer": 0, "exp": "Thiết kế hướng đối tượng đòi hỏi tư duy trừu tượng cao, nên có đường cong học tập khó hơn (không dễ học như hướng thủ tục)."},
  377: {"answer": 2, "exp": "Hướng chức năng và Hướng đối tượng không đối kháng mà có thể bổ sung cho nhau tùy từng mô-đun trong một hệ thống lớn."},
  378: {"answer": 3, "exp": "Các module nên có kích thước vừa phải (nhỏ gọn) để dễ kiểm soát và kiểm thử, chứ không phải 'đủ lớn'."},
  379: {"answer": 0, "exp": "Sự kết dính (Cohesion) đo lường mức độ liên kết chặt chẽ và nhất quán bên trong một module."},
  380: {"answer": 3, "exp": "Các loại trừu tượng trong thiết kế gồm: Trừu tượng dữ liệu, trừu tượng thủ tục, và trừu tượng điều khiển. Không có trừu tượng 'Chương trình'."},
  381: {"answer": 0, "exp": "Kiến trúc phần mềm quan tâm đến cấu trúc tổng thể, luồng điều khiển và sự phân tán, còn mô hình 'Dữ liệu' chi tiết thuộc về thiết kế dữ liệu."},
  382: {"answer": 1, "exp": "Cấp bậc điều khiển (Control hierarchy) thể hiện sự phân cấp và gọi hàm giữa các module trong hệ thống."},
  383: {"answer": 1, "exp": "Thủ tục phần mềm (Procedural design) đi sâu vào việc mô tả thuật toán và xử lý chi tiết bên trong từng module."},
  384: {"answer": 3, "exp": "Bắt buộc phải thiết kế dữ liệu trước vì cấu trúc dữ liệu ảnh hưởng trực tiếp đến cách thuật toán và thủ tục xử lý nó."},
  385: {"answer": 1, "exp": "Ma trận tham chiếu chéo (Traceability Matrix) giúp đảm bảo không có yêu cầu nào bị bỏ sót trong quá trình thiết kế."},
  386: {"answer": 0, "exp": "Kiến trúc mô tả mức độ vĩ mô (high-level) của hệ thống. Chi tiết giải thuật thuộc về thiết kế thủ tục mức vi mô."},
  387: {"answer": 2, "exp": "Data Warehouse (Kho dữ liệu) lưu trữ dữ liệu lịch sử đã được tích hợp từ nhiều nguồn, chủ yếu để truy vấn nên không thường xuyên bị thay đổi."},
  388: {"answer": 3, "exp": "Mẫu kiến trúc (Architectural Pattern) bao gồm các thành phần, cấu trúc và ràng buộc, không bao gồm 'mô hình mô phỏng'."},
  389: {"answer": 1, "exp": "Để chọn mẫu kiến trúc phù hợp, kỹ sư cần phải làm rõ các đặc trưng hoạt động và các ràng buộc hệ thống."},
  400: {"answer": 2, "exp": "Giáo trình chia ra hai phương pháp tiếp cận: Thiết kế trực tiếp và Thiết kế gián tiếp. 'Thiết kế tổng quát' là một giai đoạn chứ không phải phương pháp."},
  401: {"answer": 0, "exp": "Thiết kế trực tiếp lấy ngay tài liệu yêu cầu (Xác định yêu cầu) làm đầu vào để thiết kế mà bỏ qua khâu phân tích chi tiết."},
  402: {"answer": 1, "exp": "Thiết kế trực tiếp bỏ qua bước phân tích, do đó chỉ phù hợp và an toàn với các dự án phần mềm có quy mô nhỏ."},
  403: {"answer": 3, "exp": "Thiết kế gián tiếp đòi hỏi phải qua bước Phân tích hệ thống để làm rõ chi tiết yêu cầu trước khi thiết kế."},
  404: {"answer": 2, "exp": "Nhờ có quá trình phân tích chi tiết, thiết kế gián tiếp giảm rủi ro, do đó bắt buộc áp dụng cho các dự án quy mô lớn."},
  405: {"answer": 3, "exp": "Thiết kế thành phần xử lý bao gồm các Hàm và Kiểu dữ liệu. Danh sách ràng buộc thường thuộc về Kiến trúc và Yêu cầu."},
  406: {"answer": 2, "exp": "Thiết kế xử lý (hay Thiết kế thủ tục) là bước đi vào chi tiết cấu trúc dữ liệu và các hàm/thuật toán của một module."},
  407: {"answer": 2, "exp": "Mô tả một màn hình cần: Tên, nội dung tĩnh, cách trình bày và các thao tác (nút bấm, nhập liệu) người dùng có thể thực hiện."},
  408: {"answer": 0, "exp": "Tính nhất quán đòi hỏi các phần tử tương đồng phải giống nhau về: Vị trí, ngôn ngữ, hình dáng, màu sắc và cách kích hoạt."},
  409: {"answer": 3, "exp": "Đích đến cuối cùng của mọi quy trình phần mềm và thiết kế đều là đảm bảo Chất lượng phần mềm cao nhất."},
  410: {"answer": 1, "exp": "Giao diện tốt chú trọng vào trải nghiệm người dùng (UX) và tính dễ dùng, năng khiếu thẩm mỹ (đồ họa bóng bẩy) ít quan trọng hơn yếu tố khoa học."},
  411: {"answer": 3, "exp": "Thông báo lỗi tốt cần mang tính xây dựng: báo lỗi bằng cả text, âm thanh và màu sắc nổi bật để người dùng dễ nhận biết."},
  412: {"answer": 1, "exp": "Thiết kế giao diện giống như bố trí nội thất phòng, cửa sổ ra vào... là nơi người dùng trực tiếp tiếp xúc và cảm nhận."},
  413: {"answer": 2, "exp": "Các khía cạnh kỹ thuật gồm thiết kế: Dữ liệu, Kiến trúc, Giao diện, Thủ tục. 'Thiết kế sơ bộ/chi tiết' là cách nhìn quản lý."},
  414: {"answer": 0, "exp": "Trong thiết kế hướng chức năng, các module thường chia sẻ một vùng dữ liệu chung (global data). Điều này dễ sinh lỗi lề."},
  415: {"answer": 0, "exp": "Mô hình Kho dữ liệu (Repository Model) xây dựng dựa trên 1 CSDL trung tâm dùng chung cho mọi phân hệ."},
  416: {"answer": 0, "exp": "Câu sai là 'Thiết kế cơ sở dữ liệu' vì CSDL là thiết kế mức kiến trúc tổng thể, không phải mức thành phần nhỏ lẻ."},
  417: {"answer": 0, "exp": "Bản thiết kế tốt phải truyền tải đầy đủ toàn bộ yêu cầu (SRS) thành mô tả chi tiết để lập trình viên có thể code được."},
  418: {"answer": 3, "exp": "Để thiết kế giao diện phù hợp với hành vi người dùng, việc quan sát trực tiếp cách họ thao tác là phương pháp thực chứng tốt nhất."},
  419: {"answer": 1, "exp": "Thước đo tiên quyết của thiết kế là phải thỏa mãn (thực hiện) mọi yêu cầu chức năng đã phân tích."},
  420: {"answer": 0, "exp": "Quản lý cấu hình (Configuration Management) là hoạt động quản lý dự án, không phải là đặc trưng của một phương pháp thiết kế."},
  421: {"answer": 2, "exp": "Do giao diện là cầu nối với người dùng, nên việc đánh giá, kiểm thử thiết kế giao diện phải do chính người dùng sản phẩm quyết định."},
  422: {"answer": 1, "exp": "Sơ đồ DFD (Data Flow Diagram) mô tả cách dữ liệu được luân chuyển và bị biến đổi qua các tiến trình chức năng."},
  423: {"answer": 2, "exp": "Pha thiết kế hệ thống sẽ xuất ra tài liệu Thiết kế chi tiết để chuyển giao cho đội ngũ lập trình (cài đặt)."},
  428: {"answer": 3, "exp": "Các loại quan hệ CSDL chuẩn là 1-1, 1-nhiều, nhiều-nhiều. Không tồn tại quan hệ 'không-một' (0-1)."},
  429: {"answer": 3, "exp": "Tương tự, không tồn tại quan hệ 'một-không' (1-0) trong thiết kế lược đồ quan hệ CSDL."},
  430: {"answer": 3, "exp": "Không tồn tại kiểu quan hệ 'không-không' (0-0) trong lý thuyết thiết kế CSDL thực thể - liên kết."},
  431: {"answer": 0, "exp": "Việc tạo các liên kết (Relationship) giữa các bảng nhằm thiết lập các Ràng buộc toàn vẹn dữ liệu (Referential Integrity)."},
  432: {"answer": 0, "exp": "Khóa chính (Primary Key) là một hay nhiều cột dùng để định danh tính duy nhất của từng bản ghi, giúp phân biệt chúng."},
  433: {"answer": 0, "exp": "Khóa ngoại (Foreign Key) lưu trữ giá trị trỏ đến Khóa chính của bảng khác, đóng vai trò như một con trỏ liên kết."},
  434: {"answer": 0, "exp": "Một thiết kế kiến trúc tồi hoặc sai yêu cầu sẽ làm sụp đổ toàn bộ phần mềm, do đó đây là khâu rủi ro thất bại cao nhất."}
}

def main():
    with open('questions_db.js', 'r', encoding='utf-8') as f:
        content = f.read()
        
    match = re.search(r'const questionsDB = (\{.*\});?', content, re.DOTALL)
    db = json.loads(match.group(1))
    
    for q in db['3']:
        qid = q['id']
        if qid in correct_ch3:
            q['answer'] = correct_ch3[qid]['answer']
            q['explanation'] = correct_ch3[qid]['exp']
            
    new_content = "const questionsDB = " + json.dumps(db, ensure_ascii=False, indent=2) + ";\n"
    if "module.exports" in content:
        new_content += "\nmodule.exports = questionsDB;\n"
        
    with open('questions_db.js', 'w', encoding='utf-8') as f:
        f.write(new_content)
        
    print("Fixed Chapter 3!")

if __name__ == '__main__':
    main()
