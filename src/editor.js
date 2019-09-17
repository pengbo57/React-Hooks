import React,{Component} from 'react';
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/index.css'


class Editor extends Component {
     state = {
      editorState: null
  }

  async componentDidMount () {
    // 假设此处从服务端获取html格式的编辑器内容
    const htmlContent = `"<!DOCTYPE html><body>




    <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Thonburi}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px 'Helvetica Neue'; min-height: 14.0px}
    p.p3 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px 'Helvetica Neue'}
    span.s1 {font: 12.0px 'Helvetica Neue'}
    span.s2 {font: 12.0px '.PingFang SC'}
    span.s3 {font: 12.0px Thonburi}
    </style>
    
    
    <p class="p1">สวัสดีค่ะ<span class="s1"> </span><span class="s2">[</span><span class="s1">xxxx</span><span class="s2">]</span></p>
    <p class="p2"><br></p>
    <p class="p1">บริษัทฯ<span class="s1"> </span>มีความยินดีที่จะแจ้งให้ท่านทราบว่า<span class="s1"> </span>บริษัทฯ<span class="s1"> </span>ได้เพิ่มเติมความสนุกสนานเข้าไปในโครงการ<span class="s1"> PRU Healthy Reward </span>นั่นคือ<span class="s1"> </span>การคาดคะเนอายุของท่าน<span class="s1"> </span>ซึ่งเป็นบริการใหม่ที่จะพบได้ในเว็บไซต์ของโครงการฯ</p>
    <p class="p2"><br></p>
    <p class="p1">เพียงแค่เข้าร่วมโครงการ<span class="s1"> PRU Healthy Reward </span>ประจำเดือนนี้<span class="s1"> </span>โดยทำตามขั้นตอนง่ายๆ<span class="s1"> </span>ดังต่อไปนี้<span class="s1"> </span>เพื่อรับโอกาสในการรับของรางวัลสุดพิเศษ<span class="s1"> </span>จากการรักษาค่า<span class="s1"> BMI </span><span class="s2">(</span>ดัชนีมวลกาย)<span class="s1"> </span>ให้อยู่ในเกณฑ์ปกติ<span class="s1"> </span>หรือดำเนินการต่างๆ<span class="s1"> </span>เพื่อให้บรรลุค่า<span class="s1"> BMI</span>ที่ดียิ่งขึ้น</p>
    <p class="p2"><br></p>
    <p class="p1">ในรอบนี้<span class="s1"> </span>คุณสามารถส่งภาพถ่าย<span class="s1"> selfie </span>เพื่อร่วมโครงการฯ<span class="s1"> </span>ได้ถึง<span class="s1"> </span>วันเสาร์ที่<span class="s1"> 31 </span>สิงหาคม<span class="s1"> <span style="text-decoration-line: underline;">2562</span> </span>เท่านั้น<span class="s1"> </span>รีบส่งภาพเข้ามาร่วมสนุกกันนะคะ</p>
    <p class="p2"><br></p>
    <p class="p1">ขั้นตอนง่ายๆ<span class="s1"> </span>ในการเข้าร่วมโครงการ<span class="s1"> </span>โปรดดำเนินการตามขั้นตอนต่างๆ<span class="s1"> </span>ดังต่อไปนี้</p>
    <p class="p1"><span class="s1">1. </span>สแกน<span class="s1"> QR Code </span>ด้วยกล้องมือถือของท่าน</p>
    <p class="p1"><span class="s1">2. </span>ท่านจะเห็นหน้าต่างข้อความปรากฏขึ้นมา<span class="s1"> </span>คลิกที่ปุ่ม<span class="s1"> open </span>เพื่อเปิด<span class="s1"> <span style="color: rgb(249, 150, 59); font-style: italic;">Web Brower </span></span><span style="color: rgb(249, 150, 59); font-style: italic;">ขึ้นมา</span></p>
    <p class="p1"><span class="s1">3. </span>เข้าสู่ระบบ<span class="s1"> </span>ตามขั้นตอนต่างๆ<span class="s1"> </span>ดังนี้</p>
    <p class="p1"><span class="s1"><span class="Apple-converted-space">&nbsp;&nbsp; &nbsp; </span></span>กรณีที่ท่านเข้าร่วมโครงการเป็นครั้งแรก</p>
    <p class="p1"><span class="s1"><span class="Apple-converted-space">&nbsp;&nbsp; &nbsp;<span style="font-style: italic; color: rgb(238, 236, 224);"> </span></span><span style="font-style: italic; color: rgb(238, 236, 224);">-</span><span style="font-style: italic; color: rgb(194, 79, 74);"> </span></span><span style="font-style: italic; color: rgb(194, 79, 74);">เข้าสู่ระบบด้วย<span class="s1" style=""> </span>รหัสพนักงาน<span class="s1" style=""> 6 </span>หลักที่ใช้ใน<span class="s1" style=""> My HR </span>ของท่าน<span class="s1" style=""> </span>และดำเนินการเปลี่ยนรหัสผ่าน</span></p>
    <p class="p1"><span class="s1"><span class="Apple-converted-space">&nbsp;&nbsp; &nbsp; </span></span>กรณีที่ท่านเคยเปลี่ยนรหัสผ่านแล้ว</p>
    <p class="p1"><span class="s1"><span class="Apple-converted-space">&nbsp;&nbsp; &nbsp; </span>- </span>เข้าสู่ระบบด้วย<span class="s1"> </span>รหัสผ่านที่ท่านได้เคยเปลี่ยนแปลงไว้ในการเข้าใช้ระบบในครั้งแรก</p>
    <p class="p1"><span class="s1"><span class="Apple-converted-space">&nbsp;&nbsp; &nbsp; </span>- </span>หากลืมรหัสผ่านที่เคยเปลี่ยนไว้<span class="s1"> </span>สามารถคลิกเลือก<span class="s1"> </span><span class="s2">“</span>ลืมรหัสผ่านหรือไม่”<span class="s1"> </span>และดำเนินการตามข้อความที่ปรากฏในหน้าต่างถัดไป<span class="s1"> </span>ง่ายๆ<span class="s1"> </span>เพียงไม่กี่ขั้นตอนเท่านั้น</p>
    <p class="p2"><br></p>
    <p class="p1">หากต้องการทราบรายละเอียดต่างๆ<span class="s1"> </span>เพิ่มเติม<span class="s1"> </span>โปรดติดต่อผ่าน<span class="s1"> </span>อีเมล<span class="s1">: pruhealthy@prudential.co.th </span>หรือ<span class="s1"> </span>แผนก<span class="s1"> Technical Service </span>ทางหมายเลข<span class="s1"> </span>โทรศัพท์ภายใน<span class="s1"> 8199 </span><span class="s2">(</span>รัชดาภรณ์),<span class="s1"> 8200 </span><span class="s2">(</span>ศิริรัตน์)</p>
    <p class="p2"><br></p>
    <p class="p1">ขอแสดงความนับถือ</p>
    <p class="p3"><span class="s3">ทีมงาน</span> PRU Healthy Rewards Team</p>
    <p class="p2"><br></p>
    <p class="p3">* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *</p>
    <p class="p2"><br></p>
    <p class="p3"><span style="font-weight: bold; color: rgb(70, 172, 200); font-family: 宋体; font-size: medium;">Dear <span class="s2" style="">[</span>xxxxx<span class="s2" style="">],</span></span></p>
    <p class="p2"><span style="font-weight: bold; color: rgb(70, 172, 200); font-family: 宋体; font-size: medium;"><br></span></p>
    <p class="p3"><span style="font-weight: bold; color: rgb(70, 172, 200); font-family: 宋体; font-size: medium;">We are pleased to announce that we have added a new fun feature to predict your age in the PRU Healthy website.</span></p>
    <p class="p2"><span style="font-weight: bold; color: rgb(70, 172, 200); font-family: 宋体; font-size: medium;"><br></span></p>
    <p class="p3"><span style="font-weight: bold; color: rgb(70, 172, 200); font-family: 宋体; font-size: medium;">Do participate in this months<span class="s2">’</span> PRU Healthy Rewards programme by following the instructions below<span class="s2">,</span> and get rewarded by attaining a healthy BMI or taking positive steps towards achieving healthier BMI.</span></p>
    <p class="p2"><span style="font-weight: bold; color: rgb(70, 172, 200); font-family: 宋体; font-size: medium;"><br></span></p>
    <p class="p3"><span style="font-weight: bold; font-family: 宋体; font-size: medium;"><span style="color: rgb(70, 172, 200);">In this round</span><span class="s2" style="color: rgb(70, 172, 200);">,</span><span style="color: rgb(70, 172, 200);"> you can submit the selfie to participate in the programme until </span><span style="background-color: rgb(255, 255, 255); color: rgb(194, 79, 74);"><span style="font-style: italic;">Saturday 31st August 2019</span>.</span></span></p>
    <p class="p2"><span style="font-weight: bold; color: rgb(70, 172, 200); font-family: 宋体; font-size: medium;"><br></span></p>
    <p class="p3"><span style="font-weight: bold; color: rgb(70, 172, 200); font-family: 宋体; font-size: medium;">Don<span class="s2" style="">’</span>t miss out<span class="s2" style="">,</span> join today!</span></p>
    <p class="p2"><br></p>
    <p class="p3">To join the project<span class="s2">,</span> please follow the steps below:</p>
    <p class="p3"><span style="color: rgb(139, 170, 74); font-weight: bold;">1. Scan the attached QR code with the camera function on your <span style="text-decoration-line: underline;">mobile device</span>.</span></p>
    <p class="p3">2. Launch the web browser via click <span class="s2">“</span><span style="font-weight: bold; color: rgb(123, 91, 161);">Open</span><span class="s2">”</span> on the pop up message.</p>
    <p class="p3">3. Log in with your credentials</p>
    <p class="p3"><span class="Apple-converted-space">&nbsp; &nbsp; </span>- If this is the first time to access the <span style="text-decoration-line: line-through; background-color: rgb(249, 150, 59);">PruHealth</span> Rewards website<span class="s2">,</span> log in with your MyHR ID and change your password...</p>
    <p class="p3"><span class="Apple-converted-space">&nbsp; &nbsp; </span>- In case you changed your password before<span class="s2">,</span> log in with your new password.</p>
    <p class="p3"><span class="Apple-converted-space">&nbsp; &nbsp; </span>- If you forgot your password<span class="s2">,</span> click the forgot password link and follow the easy and fast onscreen instructions.</p>
    <p class="p2"><br></p>
    <p class="p3"><span style="font-style: italic; color: rgb(123, 91, 161);">For further information<span class="s2">,</span> please contact us via email: pruhealthy@prudential.co.th</span></p>
    <p class="p3"><span style="font-style: italic; color: rgb(123, 91, 161);">or on our internal phone number ext. 8199 Rachadaporn or ext. 8200 <b>Sirirat</b>.</span></p>
    <p class="p2"><br></p>
    <p class="p3">Yours<span class="s2">,</span></p>
    <p class="p3">PRUHealthy Rewards Team</p>
    <p class="p2"><br></p>
    <p class="p2"><br></p>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </body></html>"`
    // 使用BraftEditor.createEditorState将html字符串转换为编辑器需要的editorState数据
    this.setState({
      editorState: BraftEditor.createEditorState(htmlContent)
    })
  }

//   submitContent = async () => {
//     // 在编辑器获得焦点时按下ctrl+s会执行此方法
//     // 编辑器内容提交到服务端之前，可直接调用editorState.toHTML()来获取HTML格式的内容
//     const htmlContent = this.state.editorState.toHTML()
//     const result = await saveEditorContent(htmlContent)
//   }

  handleEditorChange = (editorState) => {
    this.setState({ editorState })
  }

  render () {

    const { editorState } = this.state

    return (
      <div className="my-component">
        <BraftEditor
          value={editorState}
          onChange={this.handleEditorChange}
          
        />
      </div>
    )

  }
}
 
export default Editor;

