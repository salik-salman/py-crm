<?php

class Menu extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var integer
     */
    public $menu_id;

    /**
     *
     * @var string
     */
    public $menu_name;

    /**
     *
     * @var string
     */
    public $menu_href;

    /**
     *
     * @var string
     */
    public $menu_is_active;

    /**
     *
     * @var string
     */
    public $parent_id;

    /**
     *
     * @var string
     */
    public $created_by;

    /**
     *
     * @var string
     */
    public $created_on;

    /**
     *
     * @var string
     */
    public $last_modefied;

    /**
     *
     * @var integer
     */
    public $menu_order;

    /**
     *
     * @var string
     */
    public $menu_icon;

    /**
     *
     * @var string
     */
    public $menu_type;

    /**
     * Initialize method for model.
     */
    public function initialize()
    {
        $this->setSchema("PY_CRM");
        $this->setSource("menu");
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return Menu[]|Menu|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null): \Phalcon\Mvc\Model\ResultsetInterface
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return Menu|\Phalcon\Mvc\Model\ResultInterface|\Phalcon\Mvc\ModelInterface|null
     */
    public static function findFirst($parameters = null): ?\Phalcon\Mvc\ModelInterface
    {
        return parent::findFirst($parameters);
    }

    /**
     * Independent Column Mapping.
     * Keys are the real names in the table and the values their names in the application
     *
     * @return array
     */
    public function columnMap()
    {
        return [
            'Menu_id' => 'id',
            'Menu_name' => 'name',
            'Menu_href' => 'href',
            'Menu_is_active' => 'is_active',
            'Parent_id' => 'parent',
            'Created_by' => 'by',
            'Created_on' => 'on',
            'Last_modefied' => 'Last_modefied',
            'Menu_order' => 'order',
            'Menu_icon' => 'icon',
            'Menu_type' => 'type'
        ];
    }

}
