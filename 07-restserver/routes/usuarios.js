const { Router } = require('express')
const { check } = require('express-validator')
const {
  usuariosGet,
  usuariosPut,
  usuariosPost,
  usuariosDelete,
  usuariosPatch,
} = require('../controllers/usuarios')
const { validarCampos } = require('../middlewares/validar-campos')

const router = Router()

router.get('/', usuariosGet)

router.post(
  '/',
  [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check(
      'password',
      'El debe password debe ser mínimo de 8 caracteres'
    ).isLength({ min: 8 }),
    check('correo', 'El correo no es válido').isEmail(),
    check('role', 'No es un role permitido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    validarCampos,
  ],
  usuariosPost
)

router.put('/:id', usuariosPut)

router.delete('/', usuariosDelete)

router.patch('/', usuariosPatch)

module.exports = router
