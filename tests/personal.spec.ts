import test from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";
import { PersonalPage } from "../pages/PersonalPage";
/**
 * Test: Crear un nuevo registro de Personal
 * Descripción: Este test automatiza el proceso de creación de un nuevo registro de personal en el sistema.
 * Se realiza el inicio de sesión, se navega al módulo de administración y luego a la sección de "Personal".
 * A continuación, se completa el formulario de registro con datos de identificación, ubicación, contacto y nacimiento.
 * Finalmente, se cierra la página una vez completada la operación.
 */
test("Crear una nueva area", async ({ page }) => {
  await page.goto("https://itimecontrol.datatech.com.pe/login.aspx");
  // Iniciar sesión
  const logueo = new LoginPage(page);
  await logueo.fillUsername("jleyva");
  await logueo.fillPassword("jleyva123");
  await logueo.clickLogin();

  // Navegar al módulo de administración
  const homePage = new HomePage(page);
  await homePage.clickModuloAdministracion();
  // Acceder a la sección de áreas
  const personalPage = new PersonalPage(page);
  await personalPage.clickPersonal();
  // Crear un nuevo registro de personal
  await personalPage.clickNuevo();
  await personalPage.fillCodigoMarcacion("12345");
  await personalPage.fillNombre("Juan");
  await personalPage.fillApellidoPaterno("Leyva");
  await personalPage.fillApellidoMaterno("Collazoss");
  await personalPage.selectTipoDocumento("DNI");
  await personalPage.fillNumeroDocumento("45847676");
  await personalPage.selectDepartamento("Lima");
  await personalPage.selectProvincia("Lima");
  await personalPage.selectDistrito("Lima");
  await personalPage.fillUrbanizacion("Urbanización Ejemplo");
  await personalPage.fillCalle("Calle Ejemplo 123");
  await personalPage.fillDireccion("Av. Ejemplo 456");
  await personalPage.fillTelefono("987654321");
  await personalPage.fillEmail("joel@gmail.com");
  await personalPage.fillFechaNacimiento("2020-01-01");

  await page.close();
});
