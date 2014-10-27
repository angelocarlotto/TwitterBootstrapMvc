using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Teste.MVC.Controllers
{
    public partial class HomeController : Controller
    {
        // GET: Home
        public virtual ActionResult Index()
        {
            return View();
        }

        public virtual JsonResult TesteMetodo(string msg)
        {
            return Json( msg , JsonRequestBehavior.AllowGet);
        }

        public virtual JsonResult Sucesso()
        {
            return Json(new  {success= true},JsonRequestBehavior.AllowGet);
        }
        public virtual JsonResult Erro()
        {
            return Json(new { success = false, msg = "server error" }, JsonRequestBehavior.AllowGet);
        }
        public virtual JsonResult Sucesso2()
        {
            return Json(new { success = true, newValue = 222 }, JsonRequestBehavior.AllowGet);
        }
    }
}