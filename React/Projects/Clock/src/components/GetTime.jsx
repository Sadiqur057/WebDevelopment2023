function GetTime() {
  let time = new Date();

  return (
    <div class="card-body">
      <h1 class="card-title">
        <span>{time.getHours()}</span> : <span>{time.getMinutes()}</span>  : <span>{time.getSeconds()}</span>
      </h1>
      <h6 class="card-title">
        <span>{time.getDate()}</span> / <span>{time.getMonth()}</span>  /  <span>{time.getFullYear()}</span>
      </h6>
    </div>
  );
}
export default GetTime;
