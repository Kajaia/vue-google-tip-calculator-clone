app.component("tip-calculator", {
  template:
    /*html*/
    `
    <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-7">
            <div class="card rounded-3 shadow border-0 px-2">
              <div class="row">
                <div class="col-md-5 px-4 py-3 border-right tex">
                  <div class="form-group">
                    <label for="bill">Bill</label>
                    <input
                      type="text"
                      class="
                        form-control
                        rounded-0
                        text-center
                        fw-bold
                        inner-shadow
                      "
                      id="bill"
                      v-model.number="bill"
                    />
                  </div>
                  <div class="form-group mt-2">
                    <label for="tip">Tip %</label>
                    <div class="input-group">
                      <button
                        class="btn btn-light border"
                        @click="decrementTip"
                      >
                        <i class="fas fa-minus fa-sm text-secondary"></i>
                      </button>
                      <input
                        type="text"
                        class="form-control text-center fw-bold inner-shadow"
                        id="tip"
                        v-model.number="tip"
                      />
                      <button
                        class="btn btn-light border"
                        @click="incrementTip"
                      >
                        <i class="fas fa-plus fa-sm text-secondary"></i>
                      </button>
                    </div>
                  </div>
                  <div class="form-group mt-2">
                    <label for="people">Number of people</label>
                    <div class="input-group">
                      <button
                        class="btn btn-light border"
                        @click="decrementPeople"
                      >
                        <i class="fas fa-minus fa-sm text-secondary"></i>
                      </button>
                      <input
                        type="text"
                        class="form-control text-center fw-bold inner-shadow"
                        id="people"
                        v-model.number="people"
                      />
                      <button
                        class="btn btn-light border"
                        @click="incrementPeople"
                      >
                        <i class="fas fa-plus fa-sm text-secondary"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="col-md-7 px-4 py-3 my-auto text-center">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="row">
                        <div class="col-md-5">
                          <p class="fs-3 m-0">Tip</p>
                          <span v-if="people > 1 && tipTotal > 0.00"
                            ><small>Per person</small></span
                          >
                        </div>
                        <div class="col-md-7">
                          <p class="fs-3">$ {{ tipTotal }}</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="row">
                        <div class="col-md-5">
                          <p class="fw-bold fs-3 m-0">Total</p>
                          <span v-if="people > 1 && totalBill > 0.00"
                            ><small>Per person</small></span
                          >
                        </div>
                        <div class="col-md-7">
                          <p class="fw-bold fs-3">$ {{ totalBill }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
  data() {
    return {
      bill: 0,
      tip: 15,
      people: 1,
    };
  },
  methods: {
    incrementTip() {
      this.tip += 1;
    },
    decrementTip() {
      if (this.tip > 0) {
        this.tip -= 1;
      }
    },
    incrementPeople() {
      this.people += 1;
    },
    decrementPeople() {
      if (this.people > 0) {
        this.people -= 1;
      }
    },
  },
  computed: {
    tipPercent() {
      return this.bill * (this.tip / 100);
    },
    tipTotal() {
      return (this.tipPercent / this.people).toFixed(2);
    },
    totalBill() {
      return ((this.bill + this.tipPercent) / this.people).toFixed(2);
    },
  },
});
