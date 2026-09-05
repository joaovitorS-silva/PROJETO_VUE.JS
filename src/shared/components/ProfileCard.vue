<script setup lang="js">

</script>

<style>
@keyframes rgb{
0%{
    box-shadow: 0 0 3px red, 0 0 10px red;
}
25% {
    box-shadow: 0 0 3px blue, 0 0 10px blue;
}
50%{
    box-shadow: 0 0 3px rgb(1, 195, 1), 0 0 10px rgb(1, 195, 1);
}
75%{
    box-shadow: 0 0 3px rgb(168, 2, 168), 0 0 10px rgb(168, 2, 168);
}
100%{
    box-shadow: 0 0 3px red, 0 0 10px red;
}
}
#rgb{
    animation: rgb 10s infinite;
}
</style>

<template>
    <article id="rgb" class="mt-20 ml-20 flex h-[450px] w-[80rem] flex-col rounded-3xl bg-fundo-principal shadow-[0_0_3px_red,0_0_10px_red]">
        <div class="relative flex h-full w-full flex-col items-center">
                <div class="relative h-full w-full overflow-hidden rounded-3xl">
                    <img class="block h-full w-full object-cover" src="/src/App/assets/imagem_teste.webp" alt="Banner">
                    <div class="pointer-events-none absolute inset-x-0 bottom-0 h-55 bg-gradient-to-t from-fundo-principal via-fundo-principal/70 to-transparent"></div>
                </div>
            <img class="absolute bottom-0 z-10 h-30 w-30 translate-y-1/2 rounded-full border-4 border-fundo-principal object-cover" src="/src/App/assets/teste_avatar.webp" alt="User Avatar">
        </div>
    </article>
    <article id="rgb" class="mb-15 mt-25 ml-20 h-[450px] w-[80rem] rounded-3xl">
        <h1 class="text-5xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae magni unde voluptate obcaecati tempora delectus quidem, dicta, reiciendis repellendus ea, commodi ut aut accusamus eveniet fuga. Nesciunt, eos quos. Dolores?</h1>
    </article>
</template>