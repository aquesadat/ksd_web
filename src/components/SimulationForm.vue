<template>
    <!-- https://getbootstrap.com/docs/5.0/utilities/spacing/#gap -->
    <div class="form-group">
      <div class="input-group">
        <input id="amount" name="amount" placeholder="Importe inversión*" type="text" required="required" class="form-control">
        <div class="input-group-append">
          <div class="input-group-text">€</div>
        </div>
      </div>
    </div>
    <div class="form-group">
      <div>
        <select id="time" name="time" required="required" class="form-control" aria-describedby="timeHelpBlock">
          <option value="">Tiempo simulación*</option>
          <option value="15m">15 minutos</option>
          <option value="30m">30 minutos</option>
          <option value="45m">45 minutos</option>
          <option value="1h">1 hora</option>
          <option value="6h">6 horas</option>
          <option value="12h">12 horas</option>
          <option value="24h">24 horas</option>
        </select>
      </div>
    </div>
    <div class="form-group">
      <div class="input-group">
        <input id="p_fee" name="p_fee" placeholder="Comisión compra" type="text" aria-describedby="p_feeHelpBlock" class="form-control">
        <div class="input-group-append">
          <div class="input-group-text">%</div>
        </div>
      </div>
    </div>
    <div class="form-group">
      <div class="input-group">
        <input id="s_free" name="s_free" placeholder="Comisión venta" type="text" aria-describedby="s_freeHelpBlock" class="form-control">
        <div class="input-group-append">
          <div class="input-group-text">%</div>
        </div>
      </div>
    </div>
    <div class="form-group">
      <button name="submit" type="submit" class="btn btn-primary">Simular</button>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>