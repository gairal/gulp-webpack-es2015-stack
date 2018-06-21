document.body.innerHTML = `
<main class="container mx-auto p-4">
  <section class="js-calculator">
    <form><input class="bg-grey-lighter appearance-none w-full h-12 text-xl p-4" id="res" type="number" readonly=""></form>
    <div class="flex">
      <button class="p-4 bg-red text-white w-full" type="button" data-calculator="AC">
        <i class="fa fa-trash fa-lg"></i>
      </button>
    </div>
    <div class="flex">
      <button class="p-4 bg-grey-dark text-white text-xl w-1/4" type="button" data-calculator="7">7</button>
      <button class="p-4 bg-grey-dark text-white text-xl w-1/4" type="button" data-calculator="8">8</button>
      <button class="p-4 bg-grey-dark text-white text-xl w-1/4" type="button" data-calculator="9">9</button>
      <button class="p-4 bg-orange-dark text-white text-xl w-1/4" type="button" data-calculator="/">
        <i class="fa fa-scissors fa-lg"></i>
      </button>
    </div>
    <div class="flex">
      <button class="p-4 bg-grey-dark text-white text-xl w-1/4" type="button" data-calculator="4">4</button>
      <button class="p-4 bg-grey-dark text-white text-xl w-1/4" type="button" data-calculator="5">5</button>
      <button class="p-4 bg-grey-dark text-white text-xl w-1/4" type="button" data-calculator="6">6</button>
      <button class="p-4 bg-orange-dark text-white text-xl w-1/4" type="button" data-calculator="x">
        <i class="fa fa-times fa-lg"></i>
      </button>
    </div>
    <div class="flex">
      <button class="p-4 bg-grey-dark text-white text-xl w-1/4" type="button" data-calculator="1">1</button>
      <button class="p-4 bg-grey-dark text-white text-xl w-1/4" type="button" data-calculator="2">2</button>
      <button class="p-4 bg-grey-dark text-white text-xl w-1/4" type="button" data-calculator="3">3</button>
      <button class="p-4 bg-orange-dark text-white text-xl w-1/4" type="button" data-calculator="-">
        <i class="fa fa-minus fa-lg"></i>
      </button>
    </div>
    <div class="flex">
      <button class="p-4 bg-grey-dark text-white text-xl w-1/4" type="button" data-calculator="1">1</button>
      <button class="p-4 bg-green-dark text-white text-xl w-1/2" type="button" data-calculator="=">=</button>
      <button class="p-4 bg-orange-dark text-white text-xl w-1/4" type="button" data-calculator="+">
        <i class="fa fa-plus fa-lg"></i>
      </button>
    </div>
  </section>
</main>
`;
