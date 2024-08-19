function Contact() {
  return (
    <>
      <div class="reg">
        <div class="title">Registeration</div>
        <form action="#">
          <div class="box">
            <div class="input-box">
              <span class="detail"> Full name</span>
              <input type="text" placeholder="Please enter your name" />
            </div>
            <div class="input-box">
              <span class="detail">username </span>
              <input type="text" placeholder="Please enter your username" />
            </div>
            <div class="input-box">
              <span class="detail">Email </span>
              <input type="text" placeholder="Please enter your Email" />
            </div>
            <div class="input-box">
              <span class="detail">phone number </span>
              <input type="text" placeholder="Please enter your phone number" />
            </div>
            <div class="input-box">
              <span class="detail"> password</span>
              <input type="text" placeholder=" enter your password" />
            </div>
            <div class="input-box">
              <span class="detail">conform password </span>
              <input type="password" placeholder="confirm password" />
            </div>
            <div class="btnn">
              <input type="submit" value="Register" />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
export default Contact;
