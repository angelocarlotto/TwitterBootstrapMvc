using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Teste.MVC.Areas.Credito.Controllers
{
    public partial class CreditoClienteController : Controller
    {
        // GET: Credito/CreditoCliente
        public virtual ActionResult Index()
        {
            return View();
        }
    }
}