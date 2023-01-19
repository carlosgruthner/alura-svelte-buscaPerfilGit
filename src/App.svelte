<script lang="ts">

  import Formulario from "./Components/Formulario.svelte";
  import Titulo from "./Components/Titulo.svelte";
  import Usuario from "./Components/Usuario.svelte";
  import type IUsuario from "./Interfaces/IUsuario";

  let usuario: IUsuario | null = null;

  function definirUsuario(evento: CustomEvent<IUsuario | null>){
    usuario = evento.detail
  }
</script>

<div class="app">
  <header>
    <Titulo teste={"Svelte Perfis"} />

    <div class="busca-usuario">
      <Formulario on:aoAlterarUsuario={definirUsuario}/>
    </div>
  </header>

  {#if usuario}
    <Usuario usuario={usuario}/>
  {/if}
</div>

<style>
  .app {
    max-height: 100vh;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .busca-usuario {
    position: relative;
    width: 70%;
  }
</style>
