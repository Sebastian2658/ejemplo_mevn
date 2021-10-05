<template>
    <div class="container col-12">
        <div class="row mt-2 col-md-12" >
            <h1 class="text-center">TutoWeb</h1>
            <div class="col-7">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque consectetur iure magni adipisci
                    minus inventore voluptatem voluptas ad recusandae dignissimos tenetur quia quaerat ducimus
                    aspernatur, libero quis voluptate necessitatibus tempore praesentium! Necessitatibus pariatur aut
                    consectetur minus ducimus architecto mollitia labore, libero, quo aliquid perspiciatis dolor autem
                    assumenda quam consequatur voluptatem!</p>
                <div>
                <router-link to="/create" class="mx-1"><button type="button" class="btn btn-warning">Registrate es gratis</button></router-link>
                <router-link to="/login" class="mx-1"> <button type="button" class="btn btn-outline-primary">Ingresa </button></router-link>                
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
                </div>
                <div class="form-check form-check-inline" style="margin-top: 1cm;">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" >
                </div>
            </div>
            <div class="col-3">
                <img id = "imagen" src="/img/principal.jpg" alt="imagen" width="400" >
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {};
            },
    };
</script>