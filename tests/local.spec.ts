import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { LocalPage } from "../pages/LocalPage";
import { HomePage } from "../pages/HomePage";

/**
 * Test: Crear un nuevo Local
 * Descripción: Este test automatiza el proceso de creación de un nuevo local dentro del sistema.
 * Se realiza el inicio de sesión, se accede al módulo de administración y posteriormente a la sección "Local".
 * Finalmente se completa el formulario con datos válidos y se guarda el nuevo registro.
 */
test("Crear un nuevo local", async ({ page }) => {
  await page.goto("https://itimecontrol.datatech.com.pe/login.aspx");
  // Iniciar sesión
  const logueo = new LoginPage(page);
  await logueo.fillUsername("jleyva");
  await logueo.fillPassword("jleyva123");
  await logueo.clickLogin();
  // Navegar al módulo de administración
  const homePage = new HomePage(page);
  await homePage.clickModuloAdministracion();
  // Acceder a la sección de locales
  const localPage = new LocalPage(page);
  await localPage.clickLocal();
  await localPage.clickNuevo();
  await localPage.fillNombreLocal("Local Lima");
  await localPage.fillDescripcionLocal("Local LIma");
  await localPage.clickGuardar();
  await page.close();
});

/**
 * Test: Editar un Local existente
 * Descripción: Este test automatiza la edición de un registro existente en la sección "Local".
 * Se inicia sesión, se accede al módulo de administración y luego a la pantalla de locales.
 * Se selecciona un local para editar, se actualizan sus campos y se guardan los cambios.
 */
test("Editar un nuevo local", async ({ page }) => {
  await page.goto("https://itimecontrol.datatech.com.pe/login.aspx");
  // Iniciar sesión
  const logueo = new LoginPage(page);
  await logueo.fillUsername("jleyva");
  await logueo.fillPassword("jleyva123");
  await logueo.clickLogin();
  // Navegar al módulo de administración
  const homePage = new HomePage(page);
  await homePage.clickModuloAdministracion();
  // Acceder a la sección de locales
  const localPage = new LocalPage(page);
  await localPage.clickLocal();
  await localPage.clickEditar();
  await localPage.fillNombreLocal("Local Lima");
  await localPage.fillDescripcionLocal("Local LIma");
  await localPage.clickGuardar();
  await page.close();
});
