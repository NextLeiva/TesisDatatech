import test, { expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";
import { TerminalPage } from "../pages/TerminalPage";

/**
 * Test: Crear una nueva Terminal
 * Descripción: Automatiza el flujo de registro de una nueva terminal desde el módulo de administración.
 * Incluye login, navegación, llenado de formulario y guardado del registro.
 */
test("Editar una Terminal", async ({ page }) => {
  await page.goto("https://itimecontrol.datatech.com.pe/login.aspx");
  // Iniciar sesión
  const logueo = new LoginPage(page);
  await logueo.fillUsername("jleyva");
  await logueo.fillPassword("jleyva123");
  await logueo.clickLogin();
  // Navegar al módulo de administración
  const homePage = new HomePage(page);
  await homePage.clickModuloAdministracion();
  // Acceder a la sección de terminal
  const terminalPage = new TerminalPage(page);
  await terminalPage.clickTerminal();
  await terminalPage.clickEditar();
  await terminalPage.fillNombreTerminal("test terminal");
  //await terminalPage.fillSerial("1");
  await terminalPage.clickGuardar();
  await page.close();
});
/**
test("Crear una nueva Terminal", async ({ page }) => {
  await page.goto("https://itimecontrol.datatech.com.pe/login.aspx");
  // Iniciar sesión
  const logueo = new LoginPage(page);
  await logueo.fillUsername("jleyva");
  await logueo.fillPassword("jleyva123");
  await logueo.clickLogin();
  // Navegar al módulo de administración
  const homePage = new HomePage(page);
  await homePage.clickModuloAdministracion();
  // Acceder a la sección de terminal
  const terminalPage = new TerminalPage(page);
  await terminalPage.clickTerminal();
  await terminalPage.clickNuevo();
  await terminalPage.fillNombreTerminal("test terminal");
  await terminalPage.seleccionarMarca("ZKTECO");
  await terminalPage.seleccionarModelo("Red");
  await terminalPage.fillSerial("1");
  await terminalPage.seleccionarLocal("test");  
  await terminalPage.desactivarFlagMaestroSiEstaActivo();
  await terminalPage.selectEstado("Activo"); 
  await page.close();
}); */
